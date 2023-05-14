import Box from "@mui/material/Box";
import React from "react";

const SubPara = ({
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
        "& .var-blue": {
          color: "code.variable",
        },
        "& .var-red": {
          color: "code.keyword",
        },
        "& .keyword": {
          color: "code.keyword",
        },
      }}
    >
      {children}
    </Box>
  );
};

export default SubPara;
