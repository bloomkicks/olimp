import type { HeroProps } from "@/types/hero-props";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

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
  noPlan,
  sx,
}: HeroProps & { noPlan?: boolean; sx?: any }) => {
  return (
    <Box component="article">
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="center"
        alignItems="center"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
          mt={7.5}
          mb={6}
          sx={{
            width: "100%",
            maxHeight: 300,
            maxWidth: 600,
            aspectRatio: (illustration.width / illustration.height + "").slice(
              0,
              4
            ),
            ...(sx || {}),
          }}
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
              zIndex: 10,
            }}
          >
            {heading}
          </Typography>
          <HeroIllustration {...illustration} />
        </Box>
        <Description title={descTitle} text={description} />
      </Stack>
      {!noPlan && (
        <Plan title={planTitle || "ПЛАН ОБУЧЕНИЯ"} points={planPoints!} />
      )}
      <HeroDivider />
    </Box>
  );
};

export default HeroSection;
