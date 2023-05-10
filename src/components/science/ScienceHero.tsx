import HeroSection from "../layout/hero-section/HeroSection";

const ScienceHero = () => {
  return (
    <HeroSection
      heading="КОМПЬЮТЕРНЫЕ НАУКИ И МАТЕМАТИКА"
      descTitle="Математика и компьютерные науки"
      description="Информатика и математика помогут вам найти наилучшее решение задачи. К тому же, некоторые задачи по-просту требуют знания этих наук для решения"
      planPoints={[
        { title: "Тригонометрия" },
        { title: "Делимость и её свойства" },
        { title: "Простые числа и их свойства (Алг. Евклида)" },
        { title: "Теория чисел" },
        { title: "Прогрессии" },
        { title: "Векторная геометрия" },
        { title: "Теория вероятности" },
        { title: "Устройство компьютера" },
        { title: "Системы счисления" },
        { title: "Логика и её законы" },
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
