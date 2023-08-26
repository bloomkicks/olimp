import HeroSection from "../general-page/hero-section/HeroSection";

const ScienceHero = () => {
  return (
    <HeroSection
      heading="ТЕХНИЧЕСКИЕ НАУКИ И МАТЕМАТИКА"
      descTitle="Математика и компьютерные науки"
      description="Ознакомленность с понятиями этих наук очень поможет вам в решении задач большинства олимпиад по информатике"
      planPoints={[
        {
          title: "Простые числа и их свойства",
          href: "#primary-numbers",
        },
        {
          title: "Арифметические алгоритмы",
          href: "#arithmetic-algorithms",
        },
        {
          title: "Прогрессии и последовательности",
          href: "#progressions",
        },
        { title: "Теория вероятности", href: "#probability-theory" },
        {
          title: "Вычислительная геометрия",
          href: "#computational-geometry",
        },
        { title: "Системы счисления", href: "#number-systems" },
        { title: "Законы логики", href: "#logic-laws" },
      ]}
      illustration={{
        imgSrc:
          process.env.ASSET_PREFIX +
          "/illustrations/science/hero-illustration.png",
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
