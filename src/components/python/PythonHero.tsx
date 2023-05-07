import HeroSection from "../layout/page/HeroSection";

const PythonHero = () => {
  return (
    <HeroSection
      heading="ИЗУЧЕНИЕ ЯЗЫКА PYTHON"
      descTitle="Программирование на языке Python"
      description="Начнем с того, что нам нужно выбрать язык, на котором мы будем писать решение. В большинстве случаев нам подойдет Python с чистым синтаксисом и широким функционалом"
      planTitle="ПЛАН ОБУЧЕНИЯ"
      planPoints={[
        "Установка Python и IDE",
        "Переменные и значения",
        "Базовые типы данных",
        "Преобразование данных",
        "Арифметические операции и операции с битами",
        "Методы работы со строками",
        "Процедуры и функций",
        "Операторы условия",
        "Операторы цикла",
        "Перебор массивов",
        "Синтаксис Python",
        "Тестирование и дебаги",
      ]}
      illustration={{
        imgSrc: "/illustrations/python/hero-illustration.png",
        sx: {},
        alt: "",
      }}
    />
  );
};

export default PythonHero;
