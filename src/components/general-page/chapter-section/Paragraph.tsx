import Box from "@mui/material/Box";

const Paragraph = ({
  children,
  type,
}: {
  children: React.ReactNode;
  type?: string;
}) => {
  return (
    <Box
      sx={{
        "& a": { color: "primary.main", textDecoration: "underline" },
        pl: type?.includes("list") ? 2.5 : 0,
        "& li": {
          mt: 0.75,
        },
        "& .keyword": {
          color: "text.keyword",
        },
        "& .variable": {
          color: "text.variable",
        },
        "& .var-blue": {
          color: "text.var-blue",
        },
        "& .var-red": {
          color: "text.var-red",
        },
        "& .var-green": {
          color: "text.var-green",
        },
      }}
    >
      {children}
    </Box>
  );
};

export default Paragraph;
