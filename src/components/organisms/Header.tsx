import { DEPLOY_PATH, VERSION } from "@common/variables";
import { getImages } from "@libs/getResource";
import { Page } from "@libs/page";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Button,
  Chip,
  Container,
  Menu,
  MenuItem,
  useTheme,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { MouseEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const pages = [
  Page({ name: "portfolio", path: "/portfolio" }),
  Page({ name: "about", path: "/about" }),
];

const LOGO_SIZE = 40;

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
        sx={{
          background: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(10px)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ minHeight: 64, alignItems: "center" }}>
            {/* 모바일 메뉴 */}
            <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
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

            {/* PC 로고 */}
            <Typography
              component={Link}
              variant="h6"
              noWrap
              to={DEPLOY_PATH}
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

            {/* 모바일 로고 */}
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
                to={DEPLOY_PATH}
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
                  src={getImages("brand_logo", "logo_color.png")}
                  alt="logo"
                />
              </Typography>
            </Box>

            {/* 모바일 빈 컴포넌트 */}
            <Box sx={{ width: 48, display: { xs: "flex", md: "none" } }} />

            {/* PC 메뉴 */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
                alignItems: "center",
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
                      backgroundColor: "rgba(0, 0, 0, 0.04)",
                    },
                  }}
                >
                  {name}
                </Button>
              ))}
              <Chip
                color="primary"
                size="small"
                label={VERSION}
                sx={{ ml: 2, fontWeight: 600 }}
              />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar /> {/* 고정 헤더를 위한 여백 */}
    </Box>
  );
}
