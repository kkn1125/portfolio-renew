import { DEPLOY_PATH, HEADER_TEXT } from "@common/variables";
import { Page } from "@libs/page";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, Container, Menu, MenuItem } from "@mui/material";
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

export default function Header() {
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ zIndex: 999 }}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* pc */}
            <Typography
              component={Link}
              variant="h6"
              textTransform="uppercase"
              noWrap
              to={DEPLOY_PATH}
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              {HEADER_TEXT}
            </Typography>

            {/* mobile */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
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
            {/* mobile */}
            <Typography
              variant="h5"
              component={Link}
              textTransform="uppercase"
              noWrap
              to={DEPLOY_PATH}
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              {HEADER_TEXT}
            </Typography>

            {/* pc */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map(({ name, path }) => (
                <Button
                  key={name}
                  onClick={() => {
                    navigate(path);
                    handleCloseNavMenu();
                  }}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {name}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }} />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
