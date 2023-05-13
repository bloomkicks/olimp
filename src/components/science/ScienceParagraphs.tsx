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
          ,{" "}
          <Span type="link" href="this">
            https://www.coursera.org/learn/what-is-a-proof
          </Span>
        </SubPara>
      </Paragraph>
    </Box>
  );
};

export default ScienceParagraphs;
