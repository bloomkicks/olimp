import getTextSpanType from "@/features/get-text-span-type";
import Link from "next/link";
import Typography from "@mui/material/Typography";

const Span = ({
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
          ? ({ children, ...props }) => (
              <Link href={href} {...props}>
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

export default Span;
