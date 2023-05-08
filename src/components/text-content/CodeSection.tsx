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
        "& > div": {
          mb: "7px",
        },
        "& > .comment": {
          mb: "4px",
        },
        "& > div:last-child": {
          mb: 0,
        },
        "& .variable": {
          color: "code.variable",
        },
        "& .keyword": {
          color: "code.keyword",
        },
        "& .value": {
          color: "code.value",
        },
        "& .function": {
          color: "code.function",
        },
        "& .comment": {
          color: "code.comment",
        },
      }}
    >
      {children}
    </Box>
  );
};

export default CodeSection;
