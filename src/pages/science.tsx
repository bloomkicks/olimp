import ScienceParagraphs from "@/components/science/ScienceParagraphs";
import ScienceHero from "@/components/science/ScienceHero";
import FooterButton from "@/components/layout/FooterButton";

const SciencePage = () => {
  return (
    <>
      <ScienceHero />
      <ScienceParagraphs />
      <FooterButton href="/practice" />
    </>
  );
};

export default SciencePage;
