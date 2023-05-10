import HeroSection from "../layout/hero-section/HeroSection";

const MainHero = () => {
  return (
    <HeroSection
      heading="КАК ПОКОРИТЬ ОЛИМПИАДУ ПО ИНФОРМАТИКЕ"
      descTitle="Пособие по подготвке к олимпиаде"
      description="В этом пособии вы узнаете какие навыки и знания нужны для решения задач олимпиады и как им научиться"
      planTitle="ПЛАН ОБУЧЕНИЯ"
      planPoints={[
        { title: "Программирование на языке Python" },
        {
          title: "Важные алгоритмы и структуры данных",
        },
        { title: "Компьютерные науки и математика" },
        { title: "Разбор задач олимпиады и практика" },
        { title: "Советы от победителей олимпиад" },
      ]}
      illustration={{
        imgSrc: "./illustrations/main/hero-illustration.png",
        width: 412,
        height: 264,
        alt: "",
        sx: {},
      }}
    />
  );
};

export default MainHero;
