import Head from "next/head";

import MainParagraphs from "@/components/index/MainParagraphs";
import MainHero from "@/components/index/MainHero";
import FooterButton from "@/components/layout/FooterButton";

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>
          Олимп - онлайн пособие по подготовке к олимпиадам по информатике
        </title>
        <meta
          name="description"
          content="В этом пособии вы найдете всё, что нужно для подготвки к олимпиадам по информатике: последовательный план обучения, понятные объяснения, ссылки на полезные учебные ресурсы и многое другое"
        />
      </Head>
      <MainHero />
      <MainParagraphs />
      <FooterButton href="/python" />
    </>
  );
};

export default IndexPage;
