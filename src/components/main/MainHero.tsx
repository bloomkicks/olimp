import HeroSection from "../layout/hero-section/HeroSection";

const MainHero = () => {
  return (
    <HeroSection
      heading="КАК ПОКОРИТЬ ОЛИМПИАДУ ПО ИНФОРМАТИКЕ"
      descTitle="Пособие по подготвке к олимпиаде"
      description="В этом пособии вы узнаете какие навыки и знания нужны для решения задач олимпиады и как им научиться"
      planTitle="ПЛАН ОБУЧЕНИЯ"
      planPoints={[
        "Программирование на языке Python",
        "Важные алгоритмы и структуры данных",
        "Компьютерные науки и математика",
        "Разбор задач олимпиады и практика",
        "Советы от победителей олимпиад",
      ]}
      illustration={{
        imgSrc: "./illustrations/main/hero-illustration.png",
        sx: {},
        alt: "",
      }}
    />
  );
};

export default MainHero;
