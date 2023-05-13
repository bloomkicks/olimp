import type { DataFormats } from "@/types/exercise-props";
import Typography from "@mui/material/Typography";
import Span from "@/components/text-content/Span";
import Box from "@mui/material/Box";

const DataFormats = (dataFormats: DataFormats) => {
  return (
    <Box>
      <Typography variant="h3">ФОРМАТ ДАННЫХ</Typography>
      <Typography variant="h4">Входные данные</Typography>
      {dataFormats.in.map((variable, i) => (
        <Typography key={i}>
          <Span>{variable.name}</Span> - {variable.description}
        </Typography>
      ))}
      <Typography variant="h4">Выходные данные</Typography>
      {dataFormats.out.map((variable, i) => (
        <Typography key={i}>
          <Span>{variable.name}</Span> - {variable.description}
        </Typography>
      ))}
    </Box>
  );
};

export default DataFormats;
