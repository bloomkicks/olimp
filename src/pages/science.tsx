import Head from "next/head";

import ScienceParagraphs from "@/components/science/ScienceParagraphs";
import ScienceHero from "@/components/science/ScienceHero";
import FooterButton from "@/components/layout/FooterButton";

const SciencePage = () => {
  return (
    <>
      <Head>
        <title>
          Компьютерные науки / Олимп - онлайн пособие по подготовке к
          олимпиадам по информатике
        </title>
        <meta
          name="description"
          content="Ознакомленность с понятиями этих наук очень поможет вам в решении задач большинства олимпиад по информатике"
        />
      </Head>
      <ScienceHero />
      <ScienceParagraphs />
      <FooterButton href="/practice" />
    </>
  );
};

export default SciencePage;
