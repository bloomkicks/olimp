import Link from "next/link";
import PythonHero from "@/components/python/PythonHero";
import PythonParagraphs from "@/components/python/PythonParagraphs";
import Button from "@mui/material/Button";

const PythonPage = () => {
  return (
    <>
      <PythonHero />
      <PythonParagraphs />
      <Button
        component={Link}
        href="/main"
        variant="contained"
        sx={{
          px: 3.75,
          py: 1.2,
          borderRadius: 18,
          mx: 3.5,
        }}
      >
        ПРОДОЛЖИТЬ ПОДГОТОВКУ
      </Button>
    </>
  );
};

export default PythonPage;
