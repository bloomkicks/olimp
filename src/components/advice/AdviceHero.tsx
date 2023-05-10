import HeroSection from "../layout/hero-section/HeroSection";

const AdviceHero = () => {
  return (
    <HeroSection
      heading="ПОЛЕЗНЫЕ СОВЕТЫ ОТ ПОБЕДИТЕЛЕЙ"
      descTitle="Полезные советы"
      description="Чтобы решать задачи, нам в первую очередь нужно знать язык программирования. Python - хороший выбор с большой функциональностью и чистым синтаксисом"
      planTitle="РЕКОММЕНДАЦИИ"
      planPoints={[
        { title: "Практикуйтесь" },
        { title: "Советы прошедших олимпиаду" },
        { title: "Пробуйте все способы" },
        { title: "Пропускайте сложные задания" },
        { title: "Не бойтесь стоять на своём" },
        { title: "Изображайте проблему" },
      ]}
      illustration={{
        imgSrc: "./illustrations/advice/hero-illustration.png",
        width: 412,
        height: 259,
        alt: "",
        sx: { mb: -3 },
      }}
      sx={{ mt: 5.5, mb: 8 }}
    />
  );
};

export default AdviceHero;
