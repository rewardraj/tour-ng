import { FC, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { GB, PL } from "country-flag-icons/react/3x2";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Language as LanguageIcon,
  Map as MapIcon,
  LocalActivity as ActivityIcon,
} from "@mui/icons-material";
import styles from "./Navbar.module.scss";

const Navbar: FC = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langAnchorEl, setLangAnchorEl] = useState<null | HTMLElement>(null);

  const handleLangMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setLangAnchorEl(event.currentTarget);
  };

  const handleLangMenuClose = () => {
    setLangAnchorEl(null);
  };

  const changeLanguage = async (lng: string) => {
    try {
      await i18n.changeLanguage(lng);
      localStorage.setItem("preferredLanguage", lng);
      handleLangMenuClose();
    } catch (error) {
      console.error("Failed to change language:", error);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "right",
        py: 2,
        backgroundColor: "#333333", // Darker background for mobile menu
        color: "#ffffff",
      }}
    >
      <List>
        <ListItem component={NavLink} to="/destinations" sx={{ color: "#FFF" }}>
          <ListItemIcon sx={{ color: "#FFF" }}>
            <MapIcon />
          </ListItemIcon>
          <ListItemText
            primary={t("nav.destinations")}
            sx={{ color: "#FFF" }}
          />
        </ListItem>
        <ListItem component={NavLink} to="/activities" sx={{ color: "#FFF" }}>
          <ListItemIcon sx={{ color: "#FFF" }}>
            <ActivityIcon />
          </ListItemIcon>
          <ListItemText primary={t("nav.activities")} sx={{ color: "#FFF" }} />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: isScrolled
            ? "linear-gradient(45deg, #333333, #444444)" // Dark gradient on scroll
            : "linear-gradient(45deg, #1c1c1c, #2d3b39)", // Lighter gradient at the top
          backdropFilter: "blur(8px)",
          boxShadow: isScrolled ? 3 : 0,
        }}
      >
        <Container
          maxWidth="lg"
          fixed
          sx={{
            padding: "0 !important",
          }}
        >
          <Toolbar disableGutters>
            <NavLink
              to="/"
              style={{ display: "flex", alignItems: "center", flex: 1 }}
            >
              <img
                src="/app/assets/images/logoNew.png"
                alt="Logo"
                height={70}
                width={70}
                style={{ marginRight: "1rem" }}
              />
            </NavLink>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
              <Button
                component={NavLink}
                to="/destinations"
                sx={{
                  color: "#FFF",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  "&.active": {
                    color: "#FFDD00", // Bright yellow for active link
                    fontWeight: "bold",
                    textDecoration: "underline",
                  },
                  "&:hover": {
                    color: "#FFDD00", // Same color on hover for consistency
                  },
                  "&:focus": {
                    color: "#FFDD00", // Bright focus state
                    outline: "3px solid #FFDD00", // Clear focus outline for accessibility
                  },
                }}
              >
                <MapIcon />
                {t("nav.destinations")}
              </Button>
              <Button
                component={NavLink}
                to="/activities"
                sx={{
                  color: "#FFF",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  "&.active": {
                    color: "#FFDD00",
                    fontWeight: "bold",
                    textDecoration: "underline",
                  },
                  "&:hover": {
                    color: "#FFDD00",
                  },
                  "&:focus": {
                    color: "#FFDD00",
                    outline: "3px solid #FFDD00",
                  },
                }}
              >
                <ActivityIcon />
                {t("nav.activities")}
              </Button>
            </Box>

            {/* Language Selector */}
            <IconButton
              onClick={handleLangMenuOpen}
              sx={{ ml: 2, color: "#FFF" }}
            >
              <LanguageIcon />
            </IconButton>
            <Menu
              anchorEl={langAnchorEl}
              open={Boolean(langAnchorEl)}
              onClose={handleLangMenuClose}
              sx={{
                "& .MuiPaper-root": {
                  bgcolor: "background.paper",
                  mt: 1,
                },
              }}
            >
              <MenuItem onClick={() => changeLanguage("en")}>
                <GB
                  className={styles.flag}
                  style={{ marginRight: "8px", width: "20px" }}
                />
                English
              </MenuItem>
              <MenuItem onClick={() => changeLanguage("pl")}>
                <PL
                  className={styles.flag}
                  style={{ marginRight: "8px", width: "20px" }}
                />
                Polski
              </MenuItem>
            </Menu>

            {/* Mobile Menu Button */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ ml: 2, display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Navigation Drawer */}
      <Box component="nav">
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 240,
              bgcolor: "#333333",
              height: "auto",
              top: "64px", // Height of MUI AppBar
              borderRadius: "0 0 0 8px",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Toolbar spacer */}
      <Toolbar />
    </>
  );
};

export default Navbar;
