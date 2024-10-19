import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { IconButton } from "@mui/material";

export const HomeButton: React.FC<{ goToList: () => void }> = ({
  goToList,
}) => {
  return (
    <IconButton
      color="default"
      onClick={goToList}
      sx={{
        position: "fixed",
        color: "white",
        background: (theme) => theme.palette.info.main,
        right: (theme) => theme.typography.pxToRem(50),
        bottom: (theme) => theme.typography.pxToRem(100),
        zIndex: 999,
      }}
    >
      <KeyboardReturnIcon />
    </IconButton>
  );
};
