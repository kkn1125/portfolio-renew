import { DEPLOY_PATH, HEADER_TEXT, VERSION } from "@common/variables";
import { getImages } from "@libs/getResource";
import { Page } from "@libs/page";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, Chip, Container, Menu, MenuItem, Stack } from "@mui/material";
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
                letterSpacing: "0.3rem",
                color: "inherit",
                textDecoration: "none",
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
                <MenuItem>
                  <Chip color="secondary" size="small" label={VERSION} />
                </MenuItem>
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
              <Box
                component="img"
                width={LOGO_SIZE}
                height={LOGO_SIZE}
                src={getImages("brand_logo", "logo_color.png")}
                alt="logo"
              />
            </Typography>

            {/* pc */}
            <Box
              flexGrow={1}
              display={{ xs: "none", md: "flex", alignItems: "center" }}
              justifyContent="space-between"
            >
              <Stack direction="row" gap={1}>
                {pages.map(({ name, path }) => (
                  <Button
                    key={name}
                    onClick={() => {
                      navigate(path);
                      handleCloseNavMenu();
                    }}
                    sx={{ my: 1, color: "white", display: "block" }}
                  >
                    {name}
                  </Button>
                ))}
              </Stack>
              <Chip
                color="secondary"
                size="small"
                label={VERSION}
                sx={{ ml: 1 }}
              />
            </Box>

            {/* mobile */}
            <Box sx={{ flexGrow: 0 }} width={LOGO_SIZE / 2} />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
