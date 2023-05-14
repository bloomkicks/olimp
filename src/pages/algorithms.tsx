import Link from "next/link";
import Button from "@mui/material/Button";
import AlgorithmsParagraphs from "@/components/algorithms/AlgorithmsParagraphs";
import AlgorithmsHero from "@/components/algorithms/AlgorithmsHero";

const AlgorithmsPage = () => {
  return (
    <>
      <AlgorithmsHero />
      <AlgorithmsParagraphs />
      <Button
        component={Link}
        href="/science"
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

export default AlgorithmsPage;
