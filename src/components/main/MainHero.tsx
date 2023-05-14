import HeroSection from "../layout/hero-section/HeroSection";

const MainHero = () => {
  return (
    <HeroSection
      heading="КАК ПОКОРИТЬ ОЛИМПИАДУ ПО ИНФОРМАТИКЕ"
      descTitle="Пособие по подготвке к олимпиаде"
      description="Здесь вы узнаете все, что нужно для эффективной подготовки к олимпиаде по информатике "
      planTitle="ПЛАН ОБУЧЕНИЯ"
      planPoints={[
        { title: "Советы и наставления по подготовке" },
        { title: "Программирование на языке Python" },
        {
          title: "Важные алгоритмы и структуры данных",
        },
        { title: "Технические науки и математика" },
        { title: "Разбор задач олимпиады и практика" },
      ]}
      illustration={{
        imgSrc: "./illustrations/main/hero-illustration.png",
        width: 412,
        height: 264,
        alt: "",
        sx: { opacity: 0.95 },
      }}
    />
  );
};

export default MainHero;
