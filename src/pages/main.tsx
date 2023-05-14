import Link from "next/link";
import Button from "@mui/material/Button";
import MainParagraphs from "@/components/main/MainParagraphs";
import MainHero from "@/components/main/MainHero";

const MainPage = () => {
  return (
    <>
      <MainHero />
      <MainParagraphs />
      <Button
        component={Link}
        href="/advice"
        variant="contained"
        sx={{
          px: 3.75,
          py: 1.2,
          borderRadius: 18,
          mx: 3.5,
        }}
      >
        НАЧАТЬ ПОДГОТОВКУ
      </Button>
    </>
  );
};

export default MainPage;
