import Head from "next/head";

import AdviceHero from "@/components/advice/AdviceHero";
import AdviceParagraphs from "@/components/advice/AdviceParagraphs";
import FooterButton from "@/components/layout/FooterButton";

const AdvicePage = () => {
  return (
    <>
      <Head>
        <title>
          Советы / Олимп - онлайн пособие по подготовке к олимпиадам по
          информатике
        </title>
        <meta
          name="description"
          content="Услышьте советы тех, кто уже прошел тернистый путь подготовки и достиг успехов в олимпиаде"
        />
      </Head>
      <AdviceHero />
      <AdviceParagraphs />
      <FooterButton href="/python" />
    </>
  );
};

export default AdvicePage;
