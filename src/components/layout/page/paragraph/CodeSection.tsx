import Box from "@mui/material/Box";

const CodeSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      component="section"
      className="code-section"
      sx={{
        padding: "15px 20px ",
        bgcolor: "gray",
        my: "13px",
        color: 'code.default'
      }}
    >
      {children}
    </Box>
  );
};

export default CodeSection;
