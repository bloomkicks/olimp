import { useState, useEffect } from "react";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const GoUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    (window as Window).addEventListener("scroll", () => {
      if (window.scrollY >= 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }),
      [];
  });
  function clickHandler() {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <Button
      onClick={clickHandler}
      aria-label="Наверх"
      color="inherit"
      centerRipple
      sx={{
        borderRadius: "100px",
        width: { xs: 57.5, md: 70 },
        height: { xs: 57.5, md: 70 },
        minWidth: 57.5,
        position: "fixed",
        right: { xs: 30, md: 70, lg: 80 },
        bottom: { xs: 37.5, md: 42.5, lg: 50 },
        opacity: isVisible ? { xs: 0.925, md: 1 } : 0,
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "rgb(210, 210, 210)",
        boxShadow: "1px 2px 4px rgba(0,0,0,0.25)",
        transition: "opacity 350ms ease-out",
        "&:hover, &:focus-visible, &.Mui-focused": {
          bgcolor: "rgb(200, 200, 200)",
        },
        zIndex: 200,
      }}
    >
      <Box
        component="img"
        src={process.env.ASSET_PREFIX + "/general/up-arrow.svg"}
        alt="Наверх"
        width="80%"
        height="80%"
        sx={{ transform: "translateY(-4%)" }}
      ></Box>
    </Button>
  );
};

export default GoUpButton;
