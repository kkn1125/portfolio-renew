import { BRAND, PUBLISHED_YEAR } from "@common/variables";
import { Container, Stack, Typography } from "@mui/material";

export default function Footer() {
  const year = PUBLISHED_YEAR || new Date().getFullYear();

  return (
    <Stack
      component="footer"
      direction="row"
      alignItems="center"
      minHeight={64}
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[900],
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <Stack
        component={Container}
        maxWidth="xl"
        justifyContent="center"
        alignItems="center"
        sx={{ height: "100%" }}
      >
        <Typography
          variant="body2"
          component="span"
          color="text.secondary"
          align="center"
        >
          © {year} {BRAND?.toUpperCase() ?? "DEVKIMSON"}. All rights reserved.
        </Typography>
      </Stack>
    </Stack>
  );
}
