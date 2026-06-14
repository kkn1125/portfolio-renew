import { getImages, getImageUrl } from "@libs/getResource";
import { Page } from "@libs/page";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, Container, Menu, MenuItem, useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";
import { useThemeMode } from "@providers/AppThemeProvider";
import { MouseEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const pages = [
  Page({ name: "portfolio", path: "/portfolio" }),
  Page({ name: "about", path: "/about" }),
];

const LOGO_SIZE = 40;

function ThemeToggleButton() {
  const { mode, toggleMode } = useThemeMode();
  const theme = useTheme();

  return (
    <IconButton
      onClick={toggleMode}
      aria-label={mode === "light" ? "다크 모드로 전환" : "라이트 모드로 전환"}
      sx={{
        color: theme.palette.text.primary,
        minWidth: 44,
        minHeight: 44,
        "&:focus-visible": {
          outline: `2px solid ${theme.palette.accent.main}`,
          outlineOffset: 2,
        },
      }}
    >
      {mode === "light" ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
    </IconButton>
  );
}

export default function Header() {
  const navigate = useNavigate();
  const theme = useTheme();

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ zIndex: 999 }}>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: alpha(theme.palette.background.paper, 0.85),
          backdropFilter: "blur(10px)",
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ minHeight: 64, alignItems: "center" }}>
            <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="메뉴 열기"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                sx={{ color: theme.palette.text.primary }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map(({ name, path }) => (
                  <MenuItem
                    key={name}
                    onClick={() => {
                      navigate(path);
                      handleCloseNavMenu();
                    }}
                  >
                    <Typography textAlign="center" textTransform="uppercase">
                      {name}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Typography
              component={Link}
              variant="h6"
              noWrap
              to="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                letterSpacing: "0.3rem",
                color: "text.primary",
                textDecoration: "none",
                flexGrow: 1,
                justifyContent: { xs: "center", md: "flex-start" },
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                width={LOGO_SIZE}
                height={LOGO_SIZE}
                src={getImages("brand_logo", "logo_color.png")}
                alt="logo"
              />
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                justifyContent: "center",
              }}
            >
              <Typography
                component={Link}
                variant="h6"
                noWrap
                to="/"
                sx={{
                  fontWeight: 700,
                  letterSpacing: "0.3rem",
                  color: "text.primary",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  width={LOGO_SIZE}
                  height={LOGO_SIZE}
                  src={getImageUrl("brand_logo/logo_color.png")}
                  alt="logo"
                />
              </Typography>
            </Box>

            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                alignItems: "center",
              }}
            >
              <ThemeToggleButton />
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
                alignItems: "center",
                gap: 0.5,
              }}
            >
              {pages.map(({ name, path }) => (
                <Button
                  key={name}
                  onClick={() => {
                    navigate(path);
                    handleCloseNavMenu();
                  }}
                  sx={{
                    color: "text.primary",
                    display: "block",
                    fontWeight: 600,
                    fontSize: "1rem",
                    textTransform: "uppercase",
                    "&:hover": {
                      backgroundColor: alpha(theme.palette.text.primary, 0.04),
                    },
                    "&:focus-visible": {
                      outline: `2px solid ${theme.palette.accent.main}`,
                      outlineOffset: 2,
                    },
                  }}
                >
                  {name}
                </Button>
              ))}
              <ThemeToggleButton />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </Box>
  );
}
