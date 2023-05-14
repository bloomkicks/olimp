import Paragraph from "../text-content/Paragraph";
import Box from "@mui/material/Box";
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
        </SubPara>
      </Paragraph>
    </Box>
  );
};

export default AdviceParagraphs;
