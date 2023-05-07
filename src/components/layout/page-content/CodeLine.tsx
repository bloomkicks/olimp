import Typography from "@mui/material/Typography";

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
    <Typography
      className={type}
      sx={{
        opacity: type === "comment" || type === "response" ? 0.6 : 1,
        mx: type === "centered" ? "auto !important" : "",
        width: 'fit-content'
      }}
    >
      {!["no-console", "centered", "print"].includes(type || "") && (
        <Typography
          component="span"
          variant="inherit"
          sx={{ opacity: "0.6" }}
        >
          {"> "}
        </Typography>
      )}
      {children}
    </Typography>
  );
};

export default CodeLine;
