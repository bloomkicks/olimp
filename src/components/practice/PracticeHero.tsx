import HeroSection from "../general-page/hero-section/HeroSection";

const PracticeHero = () => {
  return (
    <HeroSection
      heading="РАЗБОР ЗАДАЧ ОЛИМПИАДЫ И ПРАКТИКА"
      descTitle="Разбор задач олимпиады и практика"
      description="Практика играет огромную роль в успехе. Именно поэтому мы разберем несколько задач, применив накопленные знания"
      noPlan
      illustration={{
        imgSrc:
          process.env.ASSET_PREFIX +
          "/illustrations/practice/hero-illustration.png",
        width: 412,
        height: 248,
        sx: { opacity: 0.95, mb: -1 },
        alt: "",
      }}
      sx={{ mb: 7 }}
    />
  );
};

export default PracticeHero;
