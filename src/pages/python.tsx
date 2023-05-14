import Link from "next/link";
import Button from "@mui/material/Button";
import PythonHero from "@/components/python/PythonHero";
import PythonParagraphs from "@/components/python/PythonParagraphs";

const PythonPage = () => {
  return (
    <>
      <PythonHero />
      <PythonParagraphs />
      <Button
        component={Link}
        href="/algorithms"
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
