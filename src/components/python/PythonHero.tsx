import HeroSection from "../layout/hero-section/HeroSection";

const PythonHero = () => {
  return (
    <HeroSection
      heading="ИЗУЧЕНИЕ ЯЗЫКА PYTHON"
      descTitle="Программирование на языке Python"
      description="Начинающим лучше других языков подойдет Python с простым синтаксисом и широким функционалом"
      planTitle="ПЛАН ОБУЧЕНИЯ"
      planPoints={[
        { title: "Установка Python и IDE", href: "#installation" },
        { title: "Переменные и значения", href: "#variables" },
        { title: "Базовые типы данных", href: "#data-types" },
        { title: "Преобразование данных", href: "#type-conversion" },
        {
          title: "Арифметические операции и операции с битами",
          href: "#arithmetic-operations",
        },
        {
          title: "Методы работы со строками",
          href: "#string-methods",
        },
        { title: "Функций и процедуры", href: "#functions" },
        { title: "Операторы условия", href: "#conditions" },
        { title: "Операторы цикла", href: "#cycles" },
        { title: "Перебор массивов", href: "#array-foreach" },
        { title: "Синтаксис Python", href: "#syntax" },
        { title: "Тестирование и дебаги", href: "#testing" },
        { title: "Работа с библиотеками", href: "#libraries" },
      ]}
      illustration={{
        imgSrc: "./illustrations/python/hero-illustration.png",
        width: 412,
        height: 211,
        sx: { py: 2, opacity: 0.8 },
        alt: "",
      }}
    />
  );
};

export default PythonHero;
