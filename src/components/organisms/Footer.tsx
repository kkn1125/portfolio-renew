import { FOOTER_TEXT } from "@common/variables";
import { Paper, Stack, Toolbar, Typography } from "@mui/material";

function Footer() {
  return (
    <Stack
      p={3}
      sx={{
        boxShadow:
          "0px -1px 10px 0 rgba(0,0,0,0.2), 0px -1px 7px 0 rgba(0,0,0,0.12), 0px -1px 2px 0 rgba(0,0,0,0.12)",
        backgroundColor: (theme) => theme.palette.background.default,
      }}
    >
      <Typography component="div" align="center" fontWeight={700}>
        {FOOTER_TEXT}
      </Typography>
    </Stack>
  );
}

export default Footer;
