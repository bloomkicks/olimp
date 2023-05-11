import HeroSection from "../layout/hero-section/HeroSection";

const AlgorithmsHero = () => {
  return (
    <HeroSection
      heading="ВАЖНЫЕ АЛГОРИТМЫ И СТРУКТУРЫ ДАННЫХ"
      descTitle="Структуры данных и алгоритмы"
      description="Знание алгоритмов и структур данных позволяет найти самый эффективный способ решения задачи"
      planTitle="ПЛАН ОБУЧЕНИЯ"
      planPoints={[
        { title: "Понятие алгоритмов и структур данных" },
        { title: "Сложность алгоритмов, Big O нотация" },
        { title: "Array и Linked List" },
        { title: "Recursion" },
        { title: "Алгоритмы поиска" },
        { title: "Алгоритмы сортировки" },
        {
          title: "Queue и Stack",
        },
        { title: "Эвристические методы" },
        { title: "Hashmap и hash-functions" },
        { title: "Невзвешенный граф" },
        { title: "Взвешенный граф" },
        { title: "Деревья" },
        { title: "Жадные алгоритмы" },
        { title: "Динамическое программирование" },
      ]}
      illustration={{
        imgSrc: "./illustrations/algorithms/hero-illustration.png",
        width: 412,
        height: 261,
        alt: "",
        sx: {},
      }}
    />
  );
};

export default AlgorithmsHero;
