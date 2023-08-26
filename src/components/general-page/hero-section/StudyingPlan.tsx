import Box from "@mui/material/Box";

import Link from "next/link";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const StudyingPlan = ({
  title,
  points,
}: {
  title?: string;
  points: { title: string; href?: string }[];
}) => {
  const isWrap = points.length > 6;
  const isLongWrap = points.length > 12;

  return (
    <Box component="section" textAlign="center" width="100%">
      <Typography variant="h2" mb={2}>
        {title || "ПЛАН ОБУЧЕНИЯ"}
      </Typography>
      <Stack
        display="flex"
        width={
          isWrap
            ? { xs: "100%", md: "90%", lg: "80%", xl: "75%" }
            : "fit-content"
        }
        alignItems="flex-start"
        justifyContent="flex-start"
        flexWrap={{ md: "wrap" }}
        maxHeight={{ md: isLongWrap ? 415 : 300 }}
        mx="auto"
        spacing={1.25}
        textAlign="left"
        px={4}
        minWidth={340}
      >
        {points.map((point, i) => (
          <Typography
            component={point.href ? Link : "p"}
            href={point.href || ""}
            color={point.href ? "primary.dark" : "text.primary"}
            variant="subtitle1"
            key={i + point.title}
            width={{
              md: isWrap ? "49%" : "auto",
              maxWidth: "fit-content",
            }}
            sx={{
              "&:hover": {
                textDecoration: point.href ? "underline" : "none",
              },
            }}
          >
            {i + 1}. {point.title}
          </Typography>
        ))}
      </Stack>
    </Box>
  );
};

export default StudyingPlan;
