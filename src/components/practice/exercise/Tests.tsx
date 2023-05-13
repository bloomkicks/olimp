import type { Tests } from "@/types/exercise-props";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Tests = ({ tests }: { tests: Tests }) => {
  return (
    <Box>
      <Typography variant="h3">ТЕСТЫ</Typography>
      {tests.map((test, i) => (
        <Box key={i}>
          {test.in.map((variable, i, a) => (
            <Typography key={i}>
              {variable.name} = {variable.value},
            </Typography>
          ))}
          <Typography>
            {test.out.name || "Вывод"} = {test.out.value}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Tests;
