import type { Tests } from "@/models/exercise-props";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import TextSpan from "@/components/general-page/chapter-section/TextSpan";

const Tests = ({ tests }: { tests: Tests }) => {
  return (
    <Box>
      <Typography variant="h3">ТЕСТЫ</Typography>
      {tests.map((test, i) => (
        <Box key={i}>
          {test.in.map((variable, i, a) => (
            <Typography key={i} display="inline">
              <TextSpan type={i === 0 ? "var-red" : "var-green"}>
                {variable.name}
              </TextSpan>{" "}
              = {variable.value},{" "}
            </Typography>
          ))}
          <Typography display="inline">
            <TextSpan type="var-blue">{test.out.name || "Вывод"}</TextSpan> ={" "}
            {test.out.value}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Tests;
