import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const CodeLine = ({
  children,
  comment,
  type,
}: {
  children: React.ReactNode;
  comment?: string;
  type?: string;
}) => {
  return (
    <Box
      className={type}
      sx={{
        opacity: ["comment", "response", "print"].includes(type || "")
          ? 0.65
          : 1,
        mx: type === "centered" ? "auto !important" : "",
        pl: type === "inner" ? 3.5 : 0,
        width: "fit-content",
      }}
    >
      {!["no-console", "centered", "print", "inner"].includes(type || "") && (
        <Typography component="span" variant="inherit" sx={{ opacity: 0.65 }}>
          {"> "}
        </Typography>
      )}
      {children}
      {comment && (
        <Typography
          component="span"
          display="inline"
          ml={1.5}
          sx={{ opacity: 0.8 }}
        >
          {comment}
        </Typography>
      )}
    </Box>
  );
};

export default CodeLine;
