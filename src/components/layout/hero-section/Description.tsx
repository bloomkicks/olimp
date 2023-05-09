import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Description = ({ title, text }: { title: string; text: string }) => {
  return (
    <Box mb={6} style={{ textAlign: "center" }} px={3.5}>
      <Typography variant="h2" mb={2}>
        {title}
      </Typography>
      <Typography variant="subtitle1">{text}</Typography>
    </Box>
  );
};

export default Description;
