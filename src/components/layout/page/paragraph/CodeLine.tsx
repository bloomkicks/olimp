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
  return <Typography>{children}</Typography>;
};

export default CodeLine;
