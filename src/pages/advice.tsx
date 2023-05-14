import Link from "next/link";
import Button from "@mui/material/Button";
import AdviceHero from "@/components/advice/AdviceHero";
import AdviceParagraphs from "@/components/advice/AdviceParagraphs";

const AdvicePage = () => {
  return (
    <>
      <AdviceHero />
      <AdviceParagraphs />
      <Button
        component={Link}
        href="/python"
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
    </>
  );
};

export default AdvicePage;
