import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";

const Paragraph = ({
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
      component="article"
      id={id}
      mb="30px"
      px={3.5}
      minWidth={340}
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

export default Paragraph;
