import type { HeroProps } from "@/types/hero-props";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import HeroDivider from "./HeroDivider";
import HeroIllustration from "./HeroIllustration";
import Description from "./Description";
import Plan from "./Plan";

const HeroSection = ({
  heading,
  descTitle,
  description,
  planPoints,
  planTitle,
  illustration,
}: HeroProps) => {
  return (
    <Box component="article">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
        mt={6}
        mb={6}
      >
        <Typography
          variant="h1"
          textAlign="center"
          sx={{
            position: "absolute",
            top: "58%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            px: 3,
          }}
        >
          {heading}
        </Typography>
        <HeroIllustration
          imgSrc={illustration.imgSrc}
          alt={illustration.alt}
          sx={illustration.sx}
        />
      </Box>
      <Description title={descTitle} text={description} />
      <Plan
        title={planTitle || "ОБЛАСТИ ОБУЧЕНИЯ"}
        points={planPoints}
      />
      <HeroDivider />
    </Box>
  );
};

export default HeroSection;
