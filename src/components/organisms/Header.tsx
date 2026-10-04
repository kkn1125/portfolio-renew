import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { useThemeMode } from "@providers/AppThemeProvider";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ResumeControl from "./ResumeControl";

const links = [
  { label: "프로젝트", to: "/portfolio" },
  { label: "소개", to: "/about" },
];

export default function Header() {
  const { mode, toggleMode } = useThemeMode();
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        본문으로 이동
      </a>
      <div className="page-shell header-inner">
        <Link to="/" className="wordmark" aria-label="김경남 포트폴리오 홈">
          <strong>김경남</strong>
          <span>Backend Engineer</span>
        </Link>
        <nav className="desktop-nav" aria-label="주 메뉴">
          <Link to="/#career">경력</Link>
          {links.map((link) => (
            <NavLink key={link.to} to={link.to}>
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="header-actions">
          <ResumeControl />
          <IconButton
            onClick={toggleMode}
            aria-label={
              mode === "light" ? "다크 모드로 전환" : "라이트 모드로 전환"
            }
          >
            {mode === "light" ? (
              <DarkModeOutlinedIcon fontSize="small" />
            ) : (
              <LightModeOutlinedIcon fontSize="small" />
            )}
          </IconButton>
          <IconButton
            className="mobile-menu-button"
            aria-label="메뉴 열기"
            aria-expanded={!!anchor}
            aria-haspopup="menu"
            aria-controls={anchor ? "mobile-navigation" : undefined}
            onClick={(event) => setAnchor(event.currentTarget)}
          >
            <MenuOutlinedIcon />
          </IconButton>
        </div>
        <Menu
          id="mobile-navigation"
          anchorEl={anchor}
          open={!!anchor}
          onClose={() => setAnchor(null)}
        >
          <MenuItem
            component={Link}
            to="/#career"
            onClick={() => setAnchor(null)}
          >
            경력
          </MenuItem>
          {links.map((link) => (
            <MenuItem
              key={link.to}
              component={Link}
              to={link.to}
              onClick={() => setAnchor(null)}
            >
              {link.label}
            </MenuItem>
          ))}
        </Menu>
      </div>
    </header>
  );
}
