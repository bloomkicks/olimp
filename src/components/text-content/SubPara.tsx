import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";

const SubPara = ({
  children,
  type,
}: {
  children: React.ReactNode;
  type?: string;
}) => {
  let isList = typeof children === "string" && type?.includes("list");
  let list: string[] | null = null;
  if (isList) {
    list = (children as string).split("=END=");
  }

  return (
    <Box
      component={
        type === "ordered-list"
          ? "ol"
          : type === "bullet-list"
          ? "ul"
          : "div"
      }
      sx={{
        "& a": { color: "primary.main", textDecoration: "underline" },
        pl: type?.includes("list") ? 2.5 : 0,
        "& li": {
          mt: 0.75,
        },
      }}
    >
      {isList
        ? list!.map((item, i, a) => (
            <Box component="li" key={"item" + i}>
              {item}
            </Box>
          ))
        : children}
    </Box>
  );
};

export default SubPara;
