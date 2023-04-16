import HeroDivider from "../layout/page/HeroDivider";
import HeroIllustration from "../layout/page/HeroIllustration";
import Description from "../layout/page/Description";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Plan from "../layout/page/Plan";

const SectionHero = () => {
  return (
    <Box component="article">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
        mt={6}
        mb={6}
      >
        <Typography
          variant="h1"
          textAlign="center"
          sx={{
            position: "absolute",
            top: "58%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            px: 3,
          }}
        >
          КАК ПОКОРИТЬ ОЛИМПИАДУ ПО ИНФОРМАТИКЕ
        </Typography>
        <HeroIllustration
          src="/illustrations/main/hero-illustration.png"
          sx={{
            width: "90%",
            maxWidth: 390,
            ml: "auto",
          }}
          alt=""
        />
      </Box>
      <Description
        title="Пособие по подготвке к олимпиаде"
        text="В этом пособии вы узнаете какие навыки и знания нужны для решения задач олимпиады и как им научиться"
      />
      <Plan
        title="ОБЛАСТИ ОБУЧЕНИЯ"
        points={[
          "Программирование на языке Python",
          "Важные алгоритмы и структуры данных",
          "Компьютерные науки и математика",
          "Разбор задач олимпиады и практика",
          "Советы от победителей олимпиад",
        ]}
      />
      <HeroDivider />
    </Box>
  );
};

export default SectionHero;
