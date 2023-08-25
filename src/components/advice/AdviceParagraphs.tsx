import Box from "@mui/material/Box";

import Paragraph from "../text-content/Paragraph";
import Span from "../text-content/Span";
import SubPara from "../text-content/SubPara";

const AdviceParagraphs = () => {
  return (
    <Box>
      <Paragraph title="ОСНОВНЫЕ УЧЕБНЫЕ РЕСУРСЫ">
        <SubPara>
          Различные интервью с участниками и победителями олимпиад, а также
          просто советы по подготовке вы можете найти в{" "}
          <Span
            type="link"
            href="https://spb.hse.ru/ba/dataanalytics/news/530412202.html"
          >
            журнале ВШЭ
          </Span>
          ,{" "}
          <Span
            type="link"
            href="https://media.foxford.ru/articles/tips-winners"
          >
            Фоксфорд
          </Span>{" "}
          или{" "}
          <Span type="link" href="https://olimpiada.ru/article/744">
            Olimpiada.ru
          </Span>
          .
        </SubPara>
        <SubPara>
          Для удобства, я перечислю несколько важных советов по подготвоке на
          этой странице.
        </SubPara>
      </Paragraph>
      <Paragraph title="Советы и наставления">
        <SubPara type="ordered-list">
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
        </SubPara>
      </Paragraph>
    </Box>
  );
};

export default AdviceParagraphs;
