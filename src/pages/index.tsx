import MainParagraphs from "@/components/main/MainParagraphs";
import MainHero from "@/components/main/MainHero";
import FooterButton from "@/components/layout/FooterButton";

const MainPage = () => {
  return (
    <>
      <MainHero />
      <MainParagraphs />
      <FooterButton href="/python" />
    </>
  );
};

export default MainPage;
