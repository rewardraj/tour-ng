import { FC, useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Container,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@app/shared/contexts/AuthContext";
import styles from "./Navbar.module.scss";
import {
  Menu as MenuIcon,
  Language as LanguageIcon,
  Map as MapIcon,
  LocalActivity as ActivityIcon,
  Login as LoginIcon,
  Dashboard as DashboardIcon,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logoImg from "@assets/images/logoNew.png";

const Navbar: FC = () => {
  const { t, i18n } = useTranslation();
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
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

  const handleLangMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
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

  interface NavItem {
    label: string;
    icon: JSX.Element;
    path?: string;
    onClick?: () => Promise<void>;
    isSpecial?: boolean;
  }

  const baseNavItems: NavItem[] = [
    {
      label: t("nav.destinations"),
      icon: <MapIcon />,
      path: "/destinations",
      isSpecial: false,
    },
    {
      label: t("nav.activities"),
      icon: <ActivityIcon />,
      path: "/activities",
      isSpecial: false,
    },
  ];

  const authNavItems = currentUser
    ? [
        {
          label: t("nav.dashboard"),
          icon: <DashboardIcon />,
          path: "/dashboard",
          isSpecial: false,
        },
        {
          label: t("nav.logout"),
          icon: <LoginIcon />,
          onClick: async () => {
            await logout();
            navigate("/");
          },
          isSpecial: true,
        },
      ]
    : [
        {
          label: t("nav.login"),
          icon: <LoginIcon />,
          path: "/login",
          isSpecial: true,
        },
      ];

  const navItems: NavItem[] = [...baseNavItems, ...authNavItems];

  const MobileMenu = (
    <div className={`${styles.mobileMenu} ${mobileOpen ? styles.show : ""}`}>
      <nav className={styles.mobileNav}>
        {navItems.map((item) =>
          item.onClick ? (
            <button
              key={item.label}
              className={styles.mobileNavLink}
              onClick={() => {
                item.onClick?.();
                handleDrawerToggle();
              }}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ) : (
            <NavLink
              key={item.label}
              to={item.path!}
              className={styles.mobileNavLink}
              onClick={handleDrawerToggle}
            >
              {item.icon}
              <span>{item.label}</span>
            </NavLink>
          )
        )}
        <div className={styles.divider} />
        <div className={styles.langSwitcher}>
          <button
            className={styles.langButton}
            onClick={() => changeLanguage(i18n.language === "en" ? "pl" : "en")}
          >
            <LanguageIcon />
            <span>{i18n.language === "en" ? "English" : "Polski"}</span>
          </button>
        </div>
      </nav>
    </div>
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
              <IconButton
                color="inherit"
                onClick={handleDrawerToggle}
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "8px",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
              {MobileMenu}
            </>
          ) : (
            <Box sx={{ display: "flex", gap: "16px" }}>
              {navItems.map((item) =>
                item.onClick ? (
                  <Button
                    key={item.label}
                    color="inherit"
                    onClick={item.onClick}
                    startIcon={item.icon}
                    sx={{
                      textTransform: "none",
                      backgroundColor: "#FFD700",
                      color: "#000",
                      borderRadius: "8px",
                      padding: "6px 20px",
                      "&:hover": {
                        backgroundColor: "#FFE44D",
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ) : (
                  <NavLink
                    key={item.label}
                    to={item.path!}
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      color="inherit"
                      startIcon={item.icon}
                      sx={{
                        textTransform: "none",
                        ...(item.isSpecial
                          ? {
                              backgroundColor: "#FFD700",
                              color: "#000",
                              borderRadius: "8px",
                              padding: "6px 20px",
                              "&:hover": {
                                backgroundColor: "#FFE44D",
                              },
                            }
                          : {
                              color: "#fff",
                              "&.active": {
                                color: "#FFD700",
                                fontWeight: "bold",
                                textDecoration: "underline",
                              },
                              "&:hover": { color: "#FFD700" },
                            }),
                      }}
                    >
                      {item.label}
                    </Button>
                  </NavLink>
                )
              )}
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
