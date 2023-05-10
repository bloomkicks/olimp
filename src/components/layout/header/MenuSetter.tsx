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
        display: "block",
        p: "3px",
        bgcolor: "white",
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
            userSelect: "none",
            transform: isCross
              ? i == 0
                ? "translateY(10px) rotate(45deg)"
                : i == 2
                ? "translateY(-10px) rotate(-45deg)"
                : {
                    xs: "translateX(100px)",
                    lg: "translateX(200px)",
                    xl: "translateX(500px)",
                  }
              : "",
          }}
          key={"bar" + color}
        ></Box>
      ))}
    </Box>
  );
};

export default MenuSetter;
