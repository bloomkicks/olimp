import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

const Plan = ({ title, points }: { title?: string; points: string[] }) => {
  return (
    <Box component="section" textAlign="center">
      <Typography variant="h2" mb={2}>
        {title || "ПЛАН ОБУЧЕНИЯ"}
      </Typography>
      <Stack
        display="inline-flex"
        alignItems="flex-start"
        justifyContent="flex-start"
        mx="auto"
        spacing={1.25}
        textAlign="left"
        px={4}
        minWidth={340}
      >
        {points.map((point, i) => (
          <Typography variant="subtitle1" key={i + point}>
            {`${i + 1}. ${point}`}
          </Typography>
        ))}
      </Stack>
    </Box>
  );
};

export default Plan;
