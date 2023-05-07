import Typography from "@mui/material/Typography" 
import Paragraph from "@/components/layout/page-content/Paragraph";
import MainHero from "@/components/main/MainHero";

const MainPage = () => {
  return (
    <>
      <MainHero />
      <Paragraph title="1. УСТАНОВКА Python И IDE">
        <Typography>
          Лучший способ учения - практика. Именно поэтому первым делом
          мы скачаем Python и приложение для работы с ним.
        </Typography>
      </Paragraph>
    </>
  );
}

export default MainPage