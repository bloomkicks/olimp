import Box from "@mui/material/Box";

import Chapter from "../general-page/chapter-section/Chapter";
import Paragraph from "../general-page/chapter-section/Paragraph";
import TextSpan from "../general-page/chapter-section/TextSpan";

const AdviceParagraphs = () => {
  return (
    <Box>
      <Chapter title="ОСНОВНЫЕ УЧЕБНЫЕ РЕСУРСЫ">
        <Paragraph>
          Различные интервью с участниками и победителями олимпиад, а также
          просто советы по подготовке вы можете найти в{" "}
          <TextSpan
            type="link"
            href="https://spb.hse.ru/ba/dataanalytics/news/530412202.html"
          >
            журнале ВШЭ
          </TextSpan>
          ,{" "}
          <TextSpan
            type="link"
            href="https://media.foxford.ru/articles/tips-winners"
          >
            Фоксфорд
          </TextSpan>{" "}
          или{" "}
          <TextSpan type="link" href="https://olimpiada.ru/article/744">
            Olimpiada.ru
          </TextSpan>
          .
        </Paragraph>
        <Paragraph>
          Для удобства, я перечислю несколько важных советов по подготвоке на
          этой странице.
        </Paragraph>
      </Chapter>
      <Chapter title="Советы и наставления">
        <Paragraph type="ordered-list">
          <ol>
            <li>Начните участвовать и практиковаться как можно раньше</li>
            <li>Не забывайте про отдых и перерывы</li>
            <li>Готовьтесь в группе, а не в одиночку</li>
            <li>Занимайтесь информатикой при любой возможности</li>
            <li>Не сдавайтесь, несмотря на неудачи</li>
            <li>Тренируйте логическое мышление и изучайте другие предметы</li>
            <li>Создайте себе здоровую конкуренцию</li>
            <li>
              Помните про переполнения памяти в программе. Неправильный выбор
              типа для целочисленной переменной многим стоил баллов
            </li>
            <li>
              Смотрите в регламенте олимпиады, что с собой можно принести на
              соревнование
            </li>
            <li>
              Внимательнее относитесь к списку принимаемых вузами олимпиад
            </li>
          </ol>
        </Paragraph>
      </Chapter>
    </Box>
  );
};

export default AdviceParagraphs;
