import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";

const Description = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <Box>
      <Typography variant="h3">{title}</Typography>
      <Box>{children}</Box>
    </Box>
  );
};

export default Description;
