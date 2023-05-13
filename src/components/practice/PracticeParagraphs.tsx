import DataFormats from "./exercise/DataFormats";
import Description from "./exercise/Description";
import Solution from "./exercise/Solution";
import Tests from "./exercise/Tests";
import Paragraph from "../text-content/Paragraph";
import SubPara from "../text-content/SubPara";
import Span from "../text-content/Span";
import Box from "@mui/material/Box";

const PracticeParagraphs = () => {
  return (
    <Paragraph>
      <Description title="ЛЯГУШКА И КУЗНЕЧИК">
        В крайних клетках полоски шириной в одну клетку и длиной в N клеток
        сидят лягушка и кузнечик: лягушка в клетке No 1, кузнечик в клетке No N.
        Каждую секунду лягушка прыгает в сторону кузнечика, и одновременно
        кузнечик прыгает в сторону лягушки. Лягушка может прыгать только на две
        или на три клетки, кузнечик, только на одну или на две клетки. За какое
        наименьшее время они смогут оказаться в одной клетке?
      </Description>
      <DataFormats
        in={[
          {
            name: "N",
            description: "длина клетчатой полосы (целое число, 2 < N < 2·10)",
          },
        ]}
        out={[
          {
            name: "Вывод",
            description:
              "минимальное количество секунд, через которое лягушка и кузнечик встретятся (целое число). Если они не смогут оказаться в одной клетке, вывести число -1",
          },
        ]}
      />
      <Tests
        tests={[
          {
            in: [
              {
                name: "N",
                value: "5",
              },
            ],
            out: {
              value: "1",
            },
          },
          {
            in: [
              {
                name: "N",
                value: "9",
              },
            ],
            out: {
              value: "2",
            },
          },
        ]}
      />
      <Solution>
        Расстояние между лягушкой и кузнечиком N = 1 клеток. За одну секунду это
        расстояние может сократиться на 3, 4 или 5 клеток. Поэтому если N − 1 =
        1 или N − 1 = 2 (то есть при N {"<"} 4) лягушка и кузнечик не смогут
        встретиться и нужно вывести -1. Во всех остальных случаях им понадобится
        (N − 1) / 5 прыжков, округленное вверх. Это значение можно вычислить по
        формуле (N - 1 + 4) // 5 (где // - операция целочисленного деления)
      </Solution>
    </Paragraph>
  );
};

export default PracticeParagraphs;
