import Divider from "@mui/material/Divider";

const HeroDivider = () => {
  return (
    <Divider
      component="hr"
      sx={{
        display: "block",
        height: 2,
        bgcolor: "#000000",
        my: 3.75,
      }}
    />
  );
};

export default HeroDivider;
