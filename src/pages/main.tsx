import Typography from "@mui/material/Typography" 
import Paragraph from "@/components/layout/page/Paragraph";
import SectionHero from "@/components/main/SectionHero";

export default function Home() {
  return (
    <>
      <SectionHero />
      <Paragraph title="1. УСТАНОВКА Python И IDE">
        <Typography>
          Лучший способ учения - практика. Именно поэтому первым делом
          мы скачаем Python и приложение для работы с ним.
        </Typography>
      </Paragraph>
    </>
  );
}
