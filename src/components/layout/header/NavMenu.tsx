import Transition from "react-transition-group/Transition";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

const NavMenu = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  return (
    <Drawer
      open={open}
      onClose={onClose}
      hideBackdrop
      keepMounted
      anchor="right"
      sx={{
        zIndex: 80,
        "& .MuiPaper-root": {
          width: "100%",
          zIndex: 79,
        },
      }}
    >
      <Paper
        sx={{
          position: "relative",
          bgcolor: "white",
          width: "100%",
          height: "100%",
        }}
        onClick={onClose}
      >
        <Transition in={open} timeout={300}>
          {(state) => (
            <Box
              position="absolute"
              width={7}
              height="100%"
              sx={{
                bgcolor: "#75C997",
                left: state === "entered" ? 0 : -7,
                transition: "left 0.1s ease-in",
              }}
            ></Box>
          )}
        </Transition>
      </Paper>
    </Drawer>
  );
};

export default NavMenu;
