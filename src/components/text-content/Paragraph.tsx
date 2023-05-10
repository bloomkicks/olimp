import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";

const Paragraph = ({
  title,
  children,
  id = "",
}: {
  title: string;
  children: React.ReactNode;
  id?: string;
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
      }}
    >
      <Typography variant="h3">{title}</Typography>
      {children}
    </Box>
  );
};

export default Paragraph;
