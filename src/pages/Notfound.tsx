import { DEPLOY_PATH } from "@common/variables";
import { Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Notfound() {
  return (
    <Stack width="50%" m="auto" alignItems="center">
      <Typography component="div" fontSize={82}>
        404
      </Typography>
      <Typography component="div" fontSize={48} gutterBottom>
        Not Found
      </Typography>
      <Button
        component={Link}
        variant="contained"
        color="primary"
        to={DEPLOY_PATH}
      >
        Home
      </Button>
    </Stack>
  );
}

export default Notfound;
