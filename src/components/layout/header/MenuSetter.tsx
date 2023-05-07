import Box from "@mui/material/Box";

const MenuSetter = ({
  onClick,
  isCross,
}: {
  onClick: () => void;
  isCross: boolean;
}) => {
  const bars = ["#A84D4D", "#75C997", "#726BCB"];

  return (
    <Box
      component="button"
      onClick={onClick}
      sx={{
        p: "3px",
        bgcolor: "transparent",
        transition: "transform 0.1s ease-out",
        cursor: "pointer",
        "&:hover, &:focus-visible": {
          transform: "scaleX(1.1)",
        },
      }}
    >
      {bars.map((color, i) => (
        <Box
          width={40}
          height={5}
          sx={{
            bgcolor: color,
            mb: i === 2 ? 0 : "5px",
            transition: "transform 0.4s ease-out",
            transform: isCross
              ? i == 0
                ? "rotate(45deg) translateY(300%)"
                : i == 2
                ? "rotate(-45deg) translateY(-300%)"
                : "translateX(100px)"
              : "",
          }}
          key={"bar" + color}
        ></Box>
      ))}
    </Box>
  );
};

export default MenuSetter;
