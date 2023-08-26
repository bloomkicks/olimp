import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Chapter = ({
  title,
  children,
  id = "",
  sx,
}: {
  title?: string;
  children: React.ReactNode;
  id?: string;
  sx?: any;
}) => {
  return (
    <Box
      component="section"
      id={id}
      mb={{ xs: "30px", md: "40px" }}
      px={{ xs: 3.5, sm: 5, md: 7 }}
      minWidth={340}
      maxWidth={{ xs: "100%", sm: 700, md: 1000, lg: 1366 }}
      mx="auto"
      sx={{
        "& > div": {
          mt: "7px",
        },
        "& > .code": {
          mt: "13px",
          mb: "13px",
        },
        "& > h2": {
          mb: "16px",
        },
        ...(sx || {}),
      }}
    >
      {title && <Typography variant="h3">{title}</Typography>}
      {children}
    </Box>
  );
};

export default Chapter;
