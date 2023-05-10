import HeroSection from "../layout/hero-section/HeroSection";

const AlgorithmsHero = () => {
  return (
    <HeroSection
      heading="ВАЖНЫЕ АЛГОРИТМЫ И СТРУКТУРЫ ДАННЫХ"
      descTitle="Важные алгоритмы и структуры данных"
      description="Знание разных алгоритмов сильно помогает участникам олимпиады в решении задач. А структуры данных позволяют найти самый удобный способ решения"
      planTitle="ПЛАН ОБУЧЕНИЯ"
      planPoints={[
        { title: "Понятие алгоритмов и структур данных" },
        { title: "Сложность алгоритмов, Big O нотация" },
        { title: "Arrays и Linked Lists" },
        { title: "Queues и Stacks" },
        { title: "Classes и OOP" },
        { title: "Recursion" },
        {
          title: "Algorithm building ideas (divide and cunquer, etc.)",
        },
        { title: "Search algorithms" },
        { title: "Sorting algorithms" },
        { title: "Hashmaps и hash-functions" },
        { title: "Graphs и Trees" },
        { title: "Graphs algorithms" },
        { title: "Greedy algorithms" },
        { title: "Dynamic programming" },
        { title: "Matrix" },
        { title: "Sparse tables" },
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
