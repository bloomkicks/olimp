import HeroSection from "../layout/hero-section/HeroSection";

const AlgorithmsHero = () => {
  return (
    <HeroSection
      heading="ВАЖНЫЕ АЛГОРИТМЫ И СТРУКТУРЫ ДАННЫХ"
      descTitle="Структуры данных и алгоритмы"
      description="Знание алгоритмов и структур данных позволяет найти самый эффективный способ решения задачи"
      planTitle="ПЛАН ОБУЧЕНИЯ"
      planPoints={[
        {
          title: "Понятие алгоритмов и структур данных",
          href: "#algorithms-introduction",
        },
        {
          title: "Сложность алгоритмов, Big O нотация",
          href: "#big-o",
        },
        { title: "Array и Linked List", href: "#arrays" },
        { title: "Рекурсия", href: "#recursion" },
        { title: "Алгоритмы поиска", href: "#searching" },
        { title: "Алгоритмы сортировки", href: "#sorting" },
        {
          title: "Queue и Stack",
          href: "#queues",
        },
        { title: "Эвристические методы", href: "#heuristic-methods" },
        { title: "Hash-таблицы и hash-функции", href: "#hashmap" },
        {
          title: "Невзвешенный граф и алгоритмы поиска",
          href: "#unweighted-graph",
        },
        {
          title: "Взвешенный граф и алгоритмы нахождения кратчайшего пути",
          href: "#weighted-graph",
        },
        {
          title: "Деревья и алгоритмы для работы с ними",
          href: "#trees",
        },
        { title: "Жадные алгоритмы", href: "#greedy-algorithms" },
        {
          title: "Динамическое программирование",
          href: "#dynamic-programming",
        },
      ]}
      illustration={{
        imgSrc: "/illustrations/algorithms/hero-illustration.png",
        width: 412,
        height: 261,
        alt: "",
        sx: {},
      }}
    />
  );
};

export default AlgorithmsHero;
