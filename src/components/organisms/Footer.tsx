import { BRAND, PUBLISHED_YEAR } from "@common/variables";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import { Information } from "@storage/introduce/information";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-inner">
        <p>
          © {PUBLISHED_YEAR || new Date().getFullYear()}{" "}
          {BRAND?.toUpperCase() ?? "DEVKIMSON"}
        </p>
        <div className="footer-links">
          <a href={`mailto:${Information.email}`}>
            Email <ArrowOutwardOutlinedIcon />
          </a>
          <a
            href={Information.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <ArrowOutwardOutlinedIcon />
          </a>
          <a href={Information.blog} target="_blank" rel="noopener noreferrer">
            Blog <ArrowOutwardOutlinedIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
