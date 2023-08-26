import Button from "@mui/material/Button";
import Link from "next/link";

const FooterButton = ({ href }: { href: string }) => {
  return (
    <Button
      aria-label="Продолжить обучение"
      component={Link}
      href={href}
      variant="contained"
      sx={{
        px: { xs: 3.75, sm: 6, lg: 8 },
        py: { xs: 1.4, sm: 1.5, lg: 1.75 },
        borderRadius: 18,
        mx: { xs: 3.5, sm: "auto" },
        display: { sm: "flex" },
        width: "fit-content",
      }}
    >
      ПРОДОЛЖИТЬ ОБУЧЕНИЕ
    </Button>
  );
};

export default FooterButton;
