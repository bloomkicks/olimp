import HeroSection from "../general-page/hero-section/HeroSection";

const AdviceHero = () => {
  return (
    <HeroSection
      heading="ПОЛЕЗНЫЕ СОВЕТЫ ОТ ПОБЕДИТЕЛЕЙ"
      descTitle="Советы и наставления"
      description="Услышьте советы тех, кто уже прошел тернистый путь подготовки и достиг успехов в олимпиаде"
      noPlan
      illustration={{
        imgSrc:
          process.env.ASSET_PREFIX +
          "/illustrations/advice/hero-illustration.png",
        width: 412,
        height: 259,
        alt: "",
        sx: { mb: -3, opacity: 0.85 },
      }}
      sx={{ mt: 5.5, mb: 8 }}
    />
  );
};

export default AdviceHero;
