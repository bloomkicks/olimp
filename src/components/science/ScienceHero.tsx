import HeroSection from "../layout/hero-section/HeroSection";

const ScienceHero = () => {
  return (
    <HeroSection
      heading="КОМПЬЮТЕРНЫЕ НАУКИ И МАТЕМАТИКА"
      descTitle="Математика и компьютерные науки"
      description="Информатика и математика помогут вам найти наилучшее решение задачи. К тому же, некоторые задачи по-просту требуют знания этих наук для решения"
      planPoints={[
        "Тригонометрия",
        "Делимость и её свойства",
        "Простые числа и их свойства (Алг. Евклида)",
        "Теория чисел",
        "Прогрессии",
        "Векторная геометрия",
        "Теория вероятности",
        "Устройство компьютера",
        "Системы счисления",
        "Логика и её законы",
      ]}
      illustration={{
        imgSrc: "./illustrations/science/hero-illustration.png",
        sx: { mb: -4 },
        alt: "",
      }}
      sx={{ mt: 5, mb: 8 }}
    />
  );
};

export default ScienceHero;
