import type { HeroIllustrationProps } from "@/types/hero-props";
import Box from "@mui/material/Box";

const HeroIllustration = ({ imgSrc, alt, sx }: HeroIllustrationProps) => {
  return (
    <Box
      component="img"
      src={imgSrc}
      alt={alt || ""}
      sx={{
        width: "calc(100% + 48px)",
        flexShrink: { xs: 0, md: 1 },
        maxWidth: 500,
        borderRight: { md: "1px solid #BBBBBB" },
        ...sx,
      }}
    ></Box>
  );
};

export default HeroIllustration;
