import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import DataFormats from "./exercise/DataFormats";
import ExerciseDescription from "./exercise/ExerciseDescription";
import Solution from "./exercise/Solution";
import Tests from "./exercise/Tests";
import Chapter from "../general-page/chapter-section/Chapter";
import Paragraph from "../general-page/chapter-section/Paragraph";
import TextSpan from "../general-page/chapter-section/TextSpan";

const PracticeParagraphs = () => {
  return (
    <Box>
      <Chapter title="ОСНОВНЫЕ УЧЕБНЫЕ РЕСУРСЫ">
        <Paragraph>
          Существует множество различных ресурсов, на которых вы можете легко
          поучаствовать в олимпиадах и попрактиковаться в решении задач. Я могу
          порекомендовать{" "}
          <TextSpan type="link" href="https://codeforces.com">
            codeforces.com
          </TextSpan>
          ,{" "}
          <TextSpan type="link" href="https://informatics.msk.ru">
            informatics.msk.ru
          </TextSpan>{" "}
          и{" "}
          <TextSpan type="link" href="https://acm.timus.ru">
            acm.timus.ru
          </TextSpan>
        </Paragraph>
        <Paragraph>
          В этой главе мы разберем пару задач, взятых из школьного этапа ВсОШ
          2022 года. Найти больше вы можете на сайте:{" "}
          <TextSpan type="link" href="this">
            https://olimpiada.ru/activity/73/tasks
          </TextSpan>
        </Paragraph>
      </Chapter>
      <Chapter
        sx={{
          "& > div": {
            mt: "24px",
          },
          "& h3": {
            mb: "7px",
          },
          "& h4": {
            mb: "5px",
            mt: "10px",
          },
          "& > h2": {
            mb: -1,
          },
        }}
      >
        <Typography variant="h2" align="center">
          ЗАДАЧА №1
        </Typography>
        <ExerciseDescription title="ЛЯГУШКА И КУЗНЕЧИК">
          В крайних клетках полоски шириной в одну клетку и длиной в{" "}
          <TextSpan type="var-red">N</TextSpan> клеток сидят лягушка и кузнечик: лягушка
          в клетке № 1, кузнечик в клетке № <TextSpan type="var-red">N</TextSpan>.
          Каждую секунду лягушка прыгает в сторону кузнечика, и одновременно
          кузнечик прыгает в сторону лягушки. Лягушка может прыгать только на
          две или на три клетки, кузнечик, только на одну или на две клетки. За
          какое наименьшее время они смогут оказаться в одной клетке?
        </ExerciseDescription>
        <DataFormats
          in={[
            {
              name: "N",
              description:
                "длина клетчатой полосы (целое число, 2 < N < 2 * 10^9)",
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
          Расстояние между лягушкой и кузнечиком <TextSpan type="var-red">N</TextSpan> =
          1 клеток. За одну секунду это расстояние может сократиться на 3, 4 или
          5 клеток. Поэтому если <TextSpan type="var-red">N</TextSpan> − 1 = 1 или{" "}
          <TextSpan type="var-red">N</TextSpan> − 1 = 2 (то есть при{" "}
          <TextSpan type="var-red">N</TextSpan> {"<"} 4) лягушка и кузнечик не смогут
          встретиться и нужно вывести -1. Во всех остальных случаях им
          понадобится (<TextSpan type="var-red">N</TextSpan> − 1) / 5 прыжков,
          округленное вверх. Это значение можно вычислить по формуле (
          <TextSpan type="var-red">N</TextSpan> - 1 + 4) // 5 (где
          {" //"} - операция целочисленного деления)
        </Solution>
        <Typography variant="h2" align="center" mt={5}>
          ЗАДАЧА №2
        </Typography>
        <ExerciseDescription title="Заказ в магазине">
          Решив запастись ручками на весь новый учебный год, Игорь подсчитал,
          что ему нужно <TextSpan type="var-green">M</TextSpan> ручек. В его любимом
          интернет-магазине есть удобная функция - он может сразу добавить в
          заказ упаковку из любого числа ручек от 1 до{" "}
          <TextSpan type="var-red">N</TextSpan>. Правда, оказалось, что нельзя добавить
          в заказ две упаковки одного размера. Например, если Игорю нужно купить{" "}
          <TextSpan type="var-green">M</TextSpan> = 12 ручек, а максимальное число ручек
          в упаковке <TextSpan type="var-red">N</TextSpan> = 10, то Игорь может добавить
          в заказ упаковку из 7 ручек и упаковку из 5 ручек, но не сможет
          добавить две упаковки из 6 ручек. Сформируйте заказ на{" "}
          <TextSpan type="var-green">M</TextSpan> ручек, используя минимальное число
          различных упаковок.
        </ExerciseDescription>
        <DataFormats
          in={[
            {
              name: "N",
              description:
                "максимальный размер одной упаковки (1 <= N <= 10^9)",
            },
            {
              name: "M",
              description:
                "обходимое количество ручек в заказе (1 <= M <= 10^9)",
            },
          ]}
          out={[
            {
              name: "Вывод",
              description:
                "размеры выбранных упаковок (одно или несколько чисел от 1 до N) в любом порядке. Есть имеется несколько возможных решений, то выведите любое из них. Если решения не существует, необходимо вывести одно число 0",
            },
          ]}
        />
        <Tests
          tests={[
            {
              in: [
                {
                  name: "N",
                  value: "10",
                },
                {
                  name: "M",
                  value: "12",
                },
              ],
              out: {
                value: "5; 7",
              },
            },
            {
              in: [
                {
                  name: "N",
                  value: "2",
                },
                {
                  name: "M",
                  value: "5",
                },
              ],
              out: {
                value: "0",
              },
            },
          ]}
        />
        <Solution>
          Сначала проверим, существует ли решение. Максимальное количество
          ручек, которое можно заказать, равно 1 + 2 + 3 + ... + <TextSpan>N</TextSpan>{" "}
          = <TextSpan>N</TextSpan> (<TextSpan>N</TextSpan> + 1)/2 (по формуле суммы
          арифметической прогрессии), и если <TextSpan>M</TextSpan> {">"} <TextSpan>N</TextSpan>{" "}
          (<TextSpan>N</TextSpan> + 1)/2, то решения не существует. Если эту сумму
          вычислять не по формуле, а при помощи цикла, то цикл длины{" "}
          <TextSpan>N</TextSpan> можеть не уложиться в ограничение по времени. В этом
          случае стоит прервать цикл, если сумма превысит <TextSpan>M</TextSpan>, либо
          заметить, что если <TextSpan>N</TextSpan> {">"} √2 · 109 ≈ 44721, то 1 + 2 + 3
          + ... + <TextSpan>N</TextSpan> {">"} 109 и решение существует. Если решение
          существует, то воспользуемся жадным алгоритмом: будем выбирать
          упаковки мак- симально возможного размера: <TextSpan>N</TextSpan>,{" "}
          <TextSpan>N</TextSpan> − 1, <TextSpan>N</TextSpan> − 2 и т.д. Если размер
          рассматриваемой упаковки s больше или равен <TextSpan>M</TextSpan>, то выведем
          значение s и уменьшим <TextSpan>M</TextSpan> на s
        </Solution>
      </Chapter>
    </Box>
  );
};

export default PracticeParagraphs;
