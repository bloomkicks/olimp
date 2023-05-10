import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Description = ({ title, text }: { title: string; text: string }) => {
  return (
    <Box
      mb={6}
      sx={{
        textAlign: { xs: "center", md: "left" },
        maxWidth: 700,
        width: "100%",
      }}
      px={3.5}
      pt={{ md: 8 }}
    >
      <Typography variant="h2" mb={2}>
        {title}
      </Typography>
      <Typography variant="subtitle1">{text}</Typography>
    </Box>
  );
};

export default Description;
