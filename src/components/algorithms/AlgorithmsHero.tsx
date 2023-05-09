import HeroSection from "../layout/hero-section/HeroSection";

const AlgorithmsHero = () => {
  return (
    <HeroSection
      heading="ВАЖНЫЕ АЛГОРИТМЫ И СТРУКТУРЫ ДАННЫХ"
      descTitle="Важные алгоритмы и структуры данных"
      description="Знание разных алгоритмов сильно помогает участникам олимпиады в решении задач. А структуры данных позволяют найти самый удобный способ решения"
      planTitle="ПЛАН ОБУЧЕНИЯ"
      planPoints={[
        "Понятие алгоритмов и структур данных",
        "Сложность алгоритмов, Big O нотация",
        "Arrays и Linked Lists",
        "Queues и Stacks",
        "Classes и OOP",
        "Recursion",
        "Algorithm building ideas (divide and cunquer, etc.)",
        "Search algorithms",
        "Sorting algorithms",
        "Hashmaps и hash-functions",
        "Graphs и Trees",
        "Graphs algorithms",
        "Greedy algorithms",
        "Dynamic programming",
        "Matrix",
        "Sparse tables",
      ]}
      illustration={{
        imgSrc: "./illustrations/algorithms/hero-illustration.png",
        alt: "",
        sx: {},
      }}
    />
  );
};

export default AlgorithmsHero;
