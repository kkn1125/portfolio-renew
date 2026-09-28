import { Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Notfound() {
  return (
    <Stack
      sx={{
        width: "50%",
        m: "auto",
        alignItems: "center"
      }}>
      <Typography component="div" sx={{
        fontSize: 82
      }}>
        404
      </Typography>
      <Typography component="div" gutterBottom sx={{
        fontSize: 48
      }}>
        Not Found
      </Typography>
      <Button component={Link} variant="contained" color="primary" to="/">
        Home
      </Button>
    </Stack>
  );
}

export default Notfound;
