import { FC, useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Drawer,
  List,
  ListItem,
  Container,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Language as LanguageIcon,
  Map as MapIcon,
  LocalActivity as ActivityIcon,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logoImg from "@assets/images/logoNew.png";

const Navbar: FC = () => {
  const { t, i18n } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langAnchorEl, setLangAnchorEl] = useState<null | HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

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

  const navItems = [
    { label: t("nav.destinations"), icon: <MapIcon />, path: "/destinations" },
    { label: t("nav.activities"), icon: <ActivityIcon />, path: "/activities" },
    { label: t("nav.blog"), icon: <ActivityIcon />, path: "/blog" },
  ];

  const DrawerContent = (
    <Box sx={{ textAlign: "center", py: 2 }}>
      <img
        src={logoImg}
        alt="Logo"
        height={50}
        style={{ marginBottom: "1rem" }}
      />
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.label}
            component={NavLink}
            to={item.path}
            onClick={handleDrawerToggle}
            sx={{ justifyContent: "center" }}
          >
            <Button
              startIcon={item.icon}
              sx={{
                color: "inherit",
                textTransform: "none",
                "&.active": { color: "#FFD700", fontWeight: "bold" },
              }}
            >
              {item.label}
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "linear-gradient(45deg, #1c1c1c, #2d3b39)",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: "space-between", px: 2 }}>
          <NavLink to="/" style={{ display: "flex", alignItems: "center" }}>
            <img
              src={logoImg}
              alt="Logo"
              height={50}
              style={{ marginRight: "0.5rem" }}
            />
          </NavLink>

          {isMobile ? (
            <>
              <IconButton color="inherit" onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                sx={{
                  "& .MuiDrawer-paper": {
                    width: 240,
                    backgroundColor: "#1c1c1c",
                    color: "#fff",
                  },
                }}
              >
                {DrawerContent}
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: "flex", gap: 2 }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  component={NavLink}
                  to={item.path}
                  startIcon={item.icon}
                  sx={{
                    color: "#fff",
                    textTransform: "none",
                    "&.active": {
                      color: "#FFD700",
                      fontWeight: "bold",
                      textDecoration: "underline",
                    },
                    "&:hover": { color: "#FFD700" },
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <IconButton color="inherit" onClick={handleLangMenuOpen}>
                <LanguageIcon />
              </IconButton>
              <Menu
                anchorEl={langAnchorEl}
                open={Boolean(langAnchorEl)}
                onClose={handleLangMenuClose}
              >
                <MenuItem onClick={() => changeLanguage("en")}>
                  English
                </MenuItem>
                <MenuItem onClick={() => changeLanguage("pl")}>Polski</MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
