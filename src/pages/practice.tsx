import PracticeHero from "@/components/practice/PracticeHero";
import PracticeParagraphs from "@/components/practice/PracticeParagraphs";
import FooterButton from "@/components/layout/FooterButton";

const PracticePage = () => {
  return (
    <>
      <PracticeHero />
      <PracticeParagraphs />
      <FooterButton href="/" />
    </>
  );
};

export default PracticePage;
