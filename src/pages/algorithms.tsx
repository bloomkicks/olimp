import AlgorithmsParagraphs from "@/components/algorithms/AlgorithmsParagraphs";
import AlgorithmsHero from "@/components/algorithms/AlgorithmsHero";
import FooterButton from "@/components/layout/FooterButton";

const AlgorithmsPage = () => {
  return (
    <>
      <AlgorithmsHero />
      <AlgorithmsParagraphs />
      <FooterButton href="/science" />
    </>
  );
};

export default AlgorithmsPage;
