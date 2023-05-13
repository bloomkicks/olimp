import HeroSection from "../layout/hero-section/HeroSection";

const ScienceHero = () => {
  return (
    <HeroSection
      heading="ТЕХНИЧЕСКИЕ НАУКИ И МАТЕМАТИКА"
      descTitle="Математика и компьютерные науки"
      description="Ознакомленность с этими технических науками очень поможет вам в решении задач некоторых олимпиад"
      planPoints={[
        { title: "Простые числа и их свойства" },
        { title: "Арифметические алгоритмы" },
        { title: "Прогрессии и последовательности" },
        { title: "Теория вероятности" },
        { title: "Вычислительная геометрия" },
        { title: "Системы счисления" },
        { title: "Законы логики" },
      ]}
      illustration={{
        imgSrc: "./illustrations/science/hero-illustration.png",
        width: 412,
        height: 307,
        sx: { mb: -4 },
        alt: "",
      }}
      sx={{ mt: 5, mb: 8 }}
    />
  );
};

export default ScienceHero;
