import Link from "next/link";
import Button from "@mui/material/Button";
import PracticeHero from "@/components/practice/PracticeHero";
import PracticeParagraphs from "@/components/practice/PracticeParagraphs";

const PracticePage = () => {
  return (
    <>
      <PracticeHero />
      <PracticeParagraphs />
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
        ВЕРНУТЬСЯ НА ГЛАВНУЮ
      </Button>
    </>
  );
};

export default PracticePage;
