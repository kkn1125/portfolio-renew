import { Box, Container, Stack, Typography } from "@mui/material";
import { BRAND } from "@common/variables";

export default function Footer() {
  return (
    <Box
      component="footer"
      minHeight={64}
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Stack
        component={Container}
        maxWidth="xl"
        justifyContent="center"
        alignItems="center"
        sx={{ height: "100%" }}
      >
        <Typography variant="body2" component="span" color="text.secondary" align="center">
          © {new Date().getFullYear()} {BRAND?.toUpperCase()}. All rights reserved.
        </Typography>
      </Stack>
    </Box>
  );
}
