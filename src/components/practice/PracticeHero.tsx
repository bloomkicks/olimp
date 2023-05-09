import HeroSection from "../layout/hero-section/HeroSection";

const PracticeHero = () => {
  return (
    <HeroSection
      heading="РАЗБОР ЗАДАЧ ОЛИМПИАДЫ И ПРАКТИКА"
      descTitle="Разбор задач олимпиады и практика"
      description="Практика играет огромную роль в успехе. Именно поэтому мы разберем несколько задач, применив накопленные знания"
      noPlan
      illustration={{
        imgSrc: "./illustrations/practice/hero-illustration.png",
        sx: { opacity: 1, mb: -1 },
        alt: "",
      }}
      sx={{ mb: 7 }}
    />
  );
};

export default PracticeHero;
