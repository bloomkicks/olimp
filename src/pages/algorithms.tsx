import Head from "next/head";

import AlgorithmsParagraphs from "@/components/algorithms/AlgorithmsParagraphs";
import AlgorithmsHero from "@/components/algorithms/AlgorithmsHero";
import FooterButton from "@/components/layout/FooterButton";

const AlgorithmsPage = () => {
  return (
    <>
      <Head>
        <title>
          Алгоритмы / Олимп - онлайн пособие по подготовке к олимпиадам по
          информатике
        </title>
        <meta
          name="description"
          content="Знание алгоритмов и структур данных позволяет найти самый эффективный способ решения задачи"
        />
      </Head>
      <AlgorithmsHero />
      <AlgorithmsParagraphs />
      <FooterButton href="/science" />
    </>
  );
};

export default AlgorithmsPage;
