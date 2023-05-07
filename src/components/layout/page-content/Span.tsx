import Typography from "@mui/material/Typography";

const Span = ({
  children,
  type,
  href
}: {
  children: React.ReactNode;
  type: string;
  href?: string
}) => {
  const types = type.split(" ");
  return (
    <Typography
      component="span"
      variant="inherit"
      sx={{
        color: "text." + types[0],
        fontWeight: types[1] === "bold" ? "bold" : "",
      }}
    >
      {children}
    </Typography>
  );
};

export default Span;
