import PythonHero from "@/components/python/PythonHero";
import PythonParagraphs from "@/components/python/PythonParagraphs";
import FooterButton from "@/components/layout/FooterButton";

const PythonPage = () => {
  return (
    <>
      <PythonHero />
      <PythonParagraphs />
      <FooterButton href="/algorithms" />
    </>
  );
};

export default PythonPage;
