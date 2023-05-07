import type { HeroIllustrationProps } from "@/types/hero-props";
import Box from "@mui/material/Box";

const HeroIllustration = ({
  imgSrc,
  alt,
  sx,
}: HeroIllustrationProps) => {
  return (
    <Box
      component="img"
      src={imgSrc}
      alt={alt || ""}
      sx={{ width: "100%", ...sx }}
    ></Box>
  );
};

export default HeroIllustration;
