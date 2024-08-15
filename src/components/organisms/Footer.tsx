import { Paper, Stack, Toolbar, Typography } from "@mui/material";

function Footer() {
  return (
    <Stack
      component={Paper}
      p={3}
      sx={{
        borderRadius: 0,
        backgroundColor: (theme) => theme.palette.background.default,
        backgroundImage: "none",
      }}
    >
      <Typography component="div" align="center" fontWeight={700}>
        test footer
      </Typography>
    </Stack>
  );
}

export default Footer;
