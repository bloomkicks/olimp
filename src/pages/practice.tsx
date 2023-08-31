import Head from "next/head";

import PracticeHero from "@/components/practice/PracticeHero";
import PracticeParagraphs from "@/components/practice/PracticeParagraphs";
import FooterButton from "@/components/layout/FooterButton";

const PracticePage = () => {
  return (
    <>
      <Head>
        <title>
          Практика / Олимп - онлайн пособие по подготовке к олимпиадам по
          информатике
        </title>
        <meta
          name="description"
          content="Практика играет огромную роль в успехе. Именно поэтому мы разберем несколько задач, применив накопленные знания"
        />
      </Head>
      <PracticeHero />
      <PracticeParagraphs />
      <FooterButton href="/" />
    </>
  );
};

export default PracticePage;
