import type { HeroIllustrationProps } from "@/types/hero-props";
import Box from "@mui/material/Box";

const HeroIllustration = ({ imgSrc, alt, sx }: HeroIllustrationProps) => {
  return (
    <Box
      component="img"
      src={imgSrc}
      alt={alt || ""}
      sx={{
        width: "100%",
        maxWidth: 500,
        borderRight: { md: "1px solid #BBBBBB" },
        ...sx,
      }}
    ></Box>
  );
};

export default HeroIllustration;
