import { BRAND, PUBLISHED_YEAR } from "@common/variables";
import { Container, Stack, Typography } from "@mui/material";

export default function Footer() {
  const year = PUBLISHED_YEAR || new Date().getFullYear();

  return (
    <Stack
      component="footer"
      direction="row"
      sx={{
        alignItems: "center",
        minHeight: 64,

        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[900],

        borderTop: (theme) => `1px solid ${theme.palette.divider}`
      }}>
      <Stack
        component={Container}
        sx={{
          maxWidth: "xl",
          justifyContent: "center",
          alignItems: "center",
          height: "100%"
        }}>
        <Typography
          variant="body2"
          component="span"
          align="center"
          sx={{
            color: "text.secondary"
          }}
        >
          © {year} {BRAND?.toUpperCase() ?? "DEVKIMSON"}. All rights reserved.
        </Typography>
      </Stack>
    </Stack>
  );
}
