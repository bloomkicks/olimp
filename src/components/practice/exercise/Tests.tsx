import type { Tests } from "@/types/exercise-props";
import Typography from "@mui/material/Typography";
import Span from "@/components/text-content/Span";
import Box from "@mui/material/Box";

const Tests = ({ tests }: { tests: Tests }) => {
  return (
    <Box>
      <Typography variant="h3">ТЕСТЫ</Typography>
      {tests.map((test, i) => (
        <Box key={i}>
          {test.in.map((variable, i, a) => (
            <Typography key={i} display="inline">
              <Span type={i === 0 ? "var-red" : "var-green"}>
                {variable.name}
              </Span>{" "}
              = {variable.value},{" "}
            </Typography>
          ))}
          <Typography display="inline">
            <Span type="var-blue">{test.out.name || "Вывод"}</Span> ={" "}
            {test.out.value}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Tests;
