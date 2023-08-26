import type { DataFormats } from "@/models/exercise-props";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import TextSpan from "@/components/general-page/chapter-section/TextSpan";

const DataFormats = (dataFormats: DataFormats) => {
  return (
    <Box>
      <Typography variant="h3">ФОРМАТ ДАННЫХ</Typography>
      <Typography variant="h4">Входные данные</Typography>
      {dataFormats.in.map((variable, i) => (
        <Typography key={i}>
          <TextSpan>{variable.name}</TextSpan> - {variable.description}
        </Typography>
      ))}
      <Typography variant="h4">Выходные данные</Typography>
      {dataFormats.out.map((variable, i) => (
        <Typography key={i}>
          <TextSpan>{variable.name}</TextSpan> - {variable.description}
        </Typography>
      ))}
    </Box>
  );
};

export default DataFormats;
