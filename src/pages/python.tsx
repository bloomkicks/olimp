import Head from "next/head";

import PythonHero from "@/components/python/PythonHero";
import PythonParagraphs from "@/components/python/PythonParagraphs";
import FooterButton from "@/components/layout/FooterButton";

const PythonPage = () => {
  return (
    <>
      <Head>
        <title>
          Python / Олимп - онлайн пособие по подготовке к олимпиадам по
          информатике
        </title>
        <meta
          name="description"
          content="Начинающим лучше других языков подойдет Python с простым синтаксисом и широким функционалом"
        />
      </Head>
      <PythonHero />
      <PythonParagraphs />
      <FooterButton href="/algorithms" />
    </>
  );
};

export default PythonPage;
