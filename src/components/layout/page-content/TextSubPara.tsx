import Typography from "@mui/material/Typography";
import React from "react";

const TextSubPara = ({ children }: { children: React.ReactNode }) => {
  return <Typography component="div">{children}</Typography>;
};

export default TextSubPara;
