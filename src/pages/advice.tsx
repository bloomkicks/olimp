import AdviceHero from "@/components/advice/AdviceHero";
import AdviceParagraphs from "@/components/advice/AdviceParagraphs";
import FooterButton from "@/components/layout/FooterButton";

const AdvicePage = () => {
  return (
    <>
      <AdviceHero />
      <AdviceParagraphs />
      <FooterButton href="/python" />
    </>
  );
};

export default AdvicePage;
