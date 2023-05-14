import Paragraph from "../text-content/Paragraph";
import SubPara from "../text-content/SubPara";
import Span from "../text-content/Span";
import Box from "@mui/material/Box";

const ScienceParagraphs = () => {
  return (
    <Box>
      <Paragraph title="ОСНОВНЫЕ УЧЕБНЫЕ РЕСУРСЫ">
        <SubPara>
          Информатику и математику вы можете изучать на таких ресурсах как:{" "}
          <Span type="link" href="this">
            https://khanacademy.com
          </Span>
          или{" "}
          <Span type="link" href="this">
            https://www.coursera.org/learn/what-is-a-proof
          </Span>
        </SubPara>
        <SubPara>
          К тому же, нередко и в курсах по алгоритмам затрагиваются математика и
          информатика, поэтому некоторые из тем вы можете найти в{" "}
          <Span
            type="link"
            href="https://fintech.tinkoff.ru/school/generation/algo"
          >
            Tinkoff Образование
          </Span>{" "}
          или{" "}
          <Span
            type="link"
            href="https://education.yandex.ru/inf?utm_source=ya_schoolbook&utm_medium=lp&utm_term=menu&utm_campaign=main"
          >
            Яндекс Учебник
          </Span>
        </SubPara>
      </Paragraph>
    </Box>
  );
};

export default ScienceParagraphs;
