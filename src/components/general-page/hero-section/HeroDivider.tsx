import Divider from "@mui/material/Divider";

const HeroDivider = () => {
  return (
    <Divider
      component="hr"
      sx={{
        display: "block",
        height: 2,
        bgcolor: "#000000",
        opacity: 0.5,
        my: { xs: 3.75, md: 5 },
      }}
    />
  );
};

export default HeroDivider;
