import PythonHero from "@/components/python/PythonHero";
import PythonParagraphs from "@/components/python/PythonParagraphs";
import Button from "@mui/material/Button";

const PythonPage = () => {
  return (
    <>
      <PythonHero />
      <PythonParagraphs />
      <Button
        variant="contained"
        sx={{ px: 3.5, py: 1.25, borderRadius: 20, mx: "auto" }}
      >
        ПРОДОЛЖИТЬ ПОДГОТОВКУ
      </Button>
    </>
  );
};

export default PythonPage;
