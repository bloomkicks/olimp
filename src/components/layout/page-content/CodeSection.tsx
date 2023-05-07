import Box from "@mui/material/Box";

const CodeSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      component="section"
      className="code-section"
      sx={{
        padding: "15px 20px",
        bgcolor: "gray",
        my: "13px",
        color: "code.default",
        "& > p": {
          mb: "7px",
        },
        "& > .comment": {
          mb: "4px",
        },
        "& > p:last-child": {
          mb: 0,
        },
      }}
    >
      {children}
    </Box>
  );
};

export default CodeSection;
