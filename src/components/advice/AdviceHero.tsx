import HeroSection from "../layout/hero-section/HeroSection";

const AdviceHero = () => {
  return (
    <HeroSection
      heading="ПОЛЕЗНЫЕ СОВЕТЫ ОТ ПОБЕДИТЕЛЕЙ"
      descTitle="Полезные советы"
      description="Чтобы решать задачи, нам в первую очередь нужно знать язык программирования. Python - хороший выбор с большой функциональностью и чистым синтаксисом"
      planTitle="РЕКОММЕНДАЦИИ"
      planPoints={[
        "Практикуйтесь",
        "Советы прошедших олимпиаду",
        "Пробуйте все способы",
        "Пропускайте сложные задания",
        "Не бойтесь стоять на своём",
        "Изображайте проблему",
      ]}
      illustration={{
        imgSrc: "./illustrations/advice/hero-illustration.png",
        alt: "",
        sx: { mb: -3 },
      }}
      sx={{ mt: 5.5, mb: 8 }}
    />
  );
};

export default AdviceHero;
