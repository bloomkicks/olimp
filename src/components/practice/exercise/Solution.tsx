import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Solution = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box>
      <Typography variant="h3">РЕШЕНИЕ</Typography>
      <Box>{children}</Box>
    </Box>
  );
};

export default Solution;
