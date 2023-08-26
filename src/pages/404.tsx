import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Head from "next/head";

const ErrorPage = () => {
  return (
    <>
      <Head>
        <title>
          Олимп - онлайн пособие по подготовке к олимпиадам по
          информатике
        </title>
        <meta
          name="description"
          content="В этом пособии вы найдете всё, что нужно для подготвки к олимпиадам по информатике: последовательный план обучения, понятные объяснения, ссылки на полезные учебные ресурсы и многое другое"
        />
      </Head>
      <Box mt={{ xs: 6, md: 10 }} mx={{ xs: 3, sm: 6 }}>
        <Typography variant="h1" mb={2}>
          Страница по данному адресу не найдена
        </Typography>
        <Typography variant="subtitle1">
          Попробуйте воспользоваться меню навигации, нажав на кнопку
          сверху страницы
        </Typography>
      </Box>
    </>
  );
};

export default ErrorPage;
