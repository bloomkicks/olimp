import getTextSpanType from "@/utils/get-text-span-type";

import Typography from "@mui/material/Typography";
import Link from "next/link";

const TextSpan = ({
  children,
  type,
  href,
}: {
  children: React.ReactNode;
  type?: string;
  href?: string;
}) => {
  let defaultType = "";
  if (typeof children === "string") {
    defaultType = getTextSpanType(children);
    if (href === "this") href = children;
  }
  const types = (type || defaultType).split(" ");

  return (
    <Typography
      component={
        type === "link"
          ? ({ children, ...props }: { children: any }) => (
              <Link key={href} href={href!} {...props}>
                {children}
              </Link>
            )
          : "span"
      }
      variant="inherit"
      className={types[0]}
      sx={{
        color: "text." + types[0] || "",
        fontWeight: types[1] === "bold" ? "bold" : "",
      }}
    >
      {children}
    </Typography>
  );
};

export default TextSpan;
