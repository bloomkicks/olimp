import type { HeroIllustrationProps } from "@/models/hero-props";

import Box from "@mui/material/Box";

const HeroIllustration = ({
  imgSrc,
  alt,
  width,
  height,
  sx,
}: HeroIllustrationProps) => {
  return (
    <Box
      component="img"
      src={imgSrc}
      alt={alt || ""}
      width={width}
      height={height}
      sx={{
        width: "100%",
        height: "auto",
        aspectRatio: (width / height + "").slice(0, 4),
        objectFit: "contain",
        maxWidth: 500,
        borderRight: { md: "1px solid #BBBBBB" },
        ...sx,
      }}
    ></Box>
  );
};

export default HeroIllustration;
