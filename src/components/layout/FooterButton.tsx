import Button from "@mui/material/Button";
import Link from "next/link";

const FooterButton = ({ href }: { href: string }) => {
  return (
    <Button
      component={Link}
      href={href}
      variant="contained"
      sx={{
        px: 3.75,
        py: 1.2,
        borderRadius: 18,
        mx: 3.5,
      }}
    >
      ПРОДОЛЖИТЬ ОБУЧЕНИЕ
    </Button>
  );
};

export default FooterButton;
