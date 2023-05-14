import Typography from "@mui/material/Typography";
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
    <Box>
      <Paragraph title="ОСНОВНЫЕ УЧЕБНЫЕ РЕСУРСЫ">
        <SubPara>
          Существует множество различных ресурсов, на которых вы можете легко
          поучаствовать в олимпиадах и попрактиковаться в решении задач. Я могу
          порекомендовать{" "}
          <Span type="link" href="https://codeforces.com">
            codeforces.com
          </Span>
          ,{" "}
          <Span type="link" href="https://informatics.msk.ru">
            informatics.msk.ru
          </Span>{" "}
          и{" "}
          <Span type="link" href="https://acm.timus.ru">
            acm.timus.ru
          </Span>
        </SubPara>
        <SubPara>
          В этой главе мы разберем пару задач, взятых из школьного этапа ВсОШ
          2022 года. Найти больше вы можете на сайте:{" "}
          <Span type="link" href="this">
            https://olimpiada.ru/activity/73/tasks
          </Span>
        </SubPara>
      </Paragraph>
      <Paragraph
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
        <Description title="ЛЯГУШКА И КУЗНЕЧИК">
          В крайних клетках полоски шириной в одну клетку и длиной в{" "}
          <Span type="var-red">N</Span> клеток сидят лягушка и кузнечик: лягушка
          в клетке № 1, кузнечик в клетке № <Span type="var-red">N</Span>.
          Каждую секунду лягушка прыгает в сторону кузнечика, и одновременно
          кузнечик прыгает в сторону лягушки. Лягушка может прыгать только на
          две или на три клетки, кузнечик, только на одну или на две клетки. За
          какое наименьшее время они смогут оказаться в одной клетке?
        </Description>
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
          Расстояние между лягушкой и кузнечиком <Span type="var-red">N</Span> =
          1 клеток. За одну секунду это расстояние может сократиться на 3, 4 или
          5 клеток. Поэтому если <Span type="var-red">N</Span> − 1 = 1 или{" "}
          <Span type="var-red">N</Span> − 1 = 2 (то есть при{" "}
          <Span type="var-red">N</Span> {"<"} 4) лягушка и кузнечик не смогут
          встретиться и нужно вывести -1. Во всех остальных случаях им
          понадобится (<Span type="var-red">N</Span> − 1) / 5 прыжков,
          округленное вверх. Это значение можно вычислить по формуле (
          <Span type="var-red">N</Span> - 1 + 4) // 5 (где
          {" //"} - операция целочисленного деления)
        </Solution>
        <Typography variant="h2" align="center" mt={5}>
          ЗАДАЧА №2
        </Typography>
        <Description title="Заказ в магазине">
          Решив запастись ручками на весь новый учебный год, Игорь подсчитал,
          что ему нужно <Span type="var-green">M</Span> ручек. В его любимом
          интернет-магазине есть удобная функция - он может сразу добавить в
          заказ упаковку из любого числа ручек от 1 до{" "}
          <Span type="var-red">N</Span>. Правда, оказалось, что нельзя добавить
          в заказ две упаковки одного размера. Например, если Игорю нужно купить{" "}
          <Span type="var-green">M</Span> = 12 ручек, а максимальное число ручек
          в упаковке <Span type="var-red">N</Span> = 10, то Игорь может добавить
          в заказ упаковку из 7 ручек и упаковку из 5 ручек, но не сможет
          добавить две упаковки из 6 ручек. Сформируйте заказ на{" "}
          <Span type="var-green">M</Span> ручек, используя минимальное число
          различных упаковок.
        </Description>
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
          ручек, которое можно заказать, равно 1 + 2 + 3 + ... + <Span>N</Span>{" "}
          = <Span>N</Span> (<Span>N</Span> + 1)/2 (по формуле суммы
          арифметической прогрессии), и если <Span>M</Span> {">"} <Span>N</Span>{" "}
          (<Span>N</Span> + 1)/2, то решения не существует. Если эту сумму
          вычислять не по формуле, а при помощи цикла, то цикл длины{" "}
          <Span>N</Span> можеть не уложиться в ограничение по времени. В этом
          случае стоит прервать цикл, если сумма превысит <Span>M</Span>, либо
          заметить, что если <Span>N</Span> {">"} √2 · 109 ≈ 44721, то 1 + 2 + 3
          + ... + <Span>N</Span> {">"} 109 и решение существует. Если решение
          существует, то воспользуемся жадным алгоритмом: будем выбирать
          упаковки мак- симально возможного размера: <Span>N</Span>,{" "}
          <Span>N</Span> − 1, <Span>N</Span> − 2 и т.д. Если размер
          рассматриваемой упаковки s больше или равен <Span>M</Span>, то выведем
          значение s и уменьшим <Span>M</Span> на s
        </Solution>
      </Paragraph>
    </Box>
  );
};

export default PracticeParagraphs;
