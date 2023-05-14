import Link from "next/link";
import Button from "@mui/material/Button";
import ScienceParagraphs from "@/components/science/ScienceParagraphs";
import ScienceHero from "@/components/science/ScienceHero";

const SciencePage = () => {
  return (
    <>
      <ScienceHero />
      <ScienceParagraphs />
      <Button
        component={Link}
        href="/practice"
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

export default SciencePage;
