import Span from "../text-content/Span";
import SubPara from "../text-content/SubPara";
import Paragraph from "../text-content/Paragraph";
import Box from "@mui/material/Box";

const AlgorithmsParagraphs = () => {
  return (
    <Box>
      <Paragraph title="ОСНОВНЫЕ УЧЕБНЫЕ РЕСУРСЫ">
        <SubPara>
          Теперь, разобравшись с Питоном, мы можем приступать к изучению
          алгоритмов и структур данных. Язык программирова ния можно представить
          как инструмент, а алгоритмы как чертеж, план решения, который мы
          воплощаем в реальность этим инструментом
        </SubPara>
        <SubPara>
          Без чертежа не выйдет ничего хорошего, поэтому нам важно тщательно
          изучить эту область. В этом нам помогут всемирно признанные книги:
        </SubPara>
        <SubPara>
          1. «Грокаем алгоритмы» от Адитьи Бхагравой - отличная книга для
          новичков, просто и понятно обьясняющая нужные нам алгоритмы, структуры
          данных и концепции в программировании. Также, в качестве языка
          программирования в ней используется Питон, так что мы сможем
          попрактиковаться
        </SubPara>
        <SubPara>
          2. «Алгоритмы. Построение и анализ» от Томаса Кортмэн и других -
          довольно тяжелая книга, тщательно покрывающая широкий диапазон важных
          для нас алгоритмов. После ее прочтения вы станите намного лучше
          разбираться в алгоритмах и сильно увеличите свои шансы на успех в
          олимпиаде
        </SubPara>
        <SubPara>
          Также полезно будет посещение разных лекции и курсов. Хорошими
          примерами будут{" "}
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
      <Paragraph
        title="1. ПОНЯТНИЕ АЛГОРИТМОВ И СТРУКТУР ДАННЫХ"
        id="algorithms-introduction"
      >
        <SubPara>
          Алгоритмы и структуры данных - важные понятия в вычислительных науках,
          помогающие эффективно решать задачи различного рода
        </SubPara>
        <SubPara>
          Алгоритм - это набор инструкций, разработанных для решения конкретной
          проблемы или выполнения определенной задачи. Алгоритмы можно
          представить как пошаговые процедуры, которые принимают входные данные
          и производят выходные. Они являются неотъемлемой частью многих
          компьютерных программ и используются для выполнения операций, таких
          как поиск, сортировка и анализ данных
        </SubPara>
        <SubPara>
          Структуры данных, с другой стороны, являются способом организации
          данных в памяти компьютера. Структуры данных могут быть полезны для
          оптимизации определенных операций, таких как поиск, сортировка и
          вставка или удаление данных. Некоторые примеры структур данных
          включают массивы, связные списки, деревья и графы, которые мы разберем
          чуть позже
        </SubPara>
        <SubPara>
          Алгоритмы и структуры данных составляют основу многих компьютерных
          программ и являются важными инструментами для решения сложных задач в
          областях, таких как математика, инженерия и наука
        </SubPara>
      </Paragraph>
      <Paragraph title="2. СЛОЖНОСТЬ АЛГОРИТМОВ" id="big-o">
        <SubPara>
          Сложность алгоритма относится к тому, как эффективно алгоритм
          использует вычислительные ресурсы, такие как время и память, для
          решения проблемы. Обычно это измеряется в терминах временной сложности
          и пространственной сложности. Временная сложность - это количество
          времени, необходимое для завершения алгоритма, а пространственная
          сложность - это количество памяти, которое алгоритм использует.
        </SubPara>
        <SubPara>
          Big O нотация - это способ выражения временной сложности алгоритма в
          виде функции размера его входных данных. Она используется для описания
          наихудшего сценария, или верхней границы, временной сложности
          алгоритма. Например, если алгоритм занимает 2n + 5 шагов для
          завершения, мы бы выразили его временную сложность в виде большой
          O-нотации как O(n), где n представляет размер входных данных.
        </SubPara>
        <SubPara>
          Big O имеет различные общие классы временных сложностей, такие как
          O(1), O(log n), O(n), O(n log n), O(n^2), O(2^n) и O(n!). Эти классы
          отражают, как растет временная сложность алгоритма при увеличении
          размера входных данных. В целом, по мере роста размера входных данных
          мы хотим, чтобы временная сложность алгоритма росла медленнее всего,
          что означает, что мы хотим выбирать алгоритмы с меньшими классами
          временной сложности, когда это возможно.
        </SubPara>
        <SubPara>
          В целом, понимание сложности алгоритма и Big O нотации является важным
          для проектирования и реализации эффективных алгоритмов, которые могут
          экономить время и вычислительные ресурсы при решении сложных задач.
        </SubPara>
      </Paragraph>
      <Paragraph title="3. ARRAY И LINKED LIST" id="arrays">
        <SubPara>1</SubPara>
      </Paragraph>
      <Paragraph title="4. РЕКУРСИЯ" id="recursion">
        <SubPara>
          Рекурсия - это концепция программирования, при которой функция
          вызывает саму себя повторно до тех пор, пока не достигнет базового
          случая, когда функция перестает вызывать себя и возвращает
          окончательный результат. Рекурсию можно определить как повторяющийся
          процесс, в котором проблема разбивается на более мелкие подпроблемы
          того же типа, пока они не станут достаточно маленькими для прямого
          решения.
        </SubPara>
        <SubPara>
          Рабочий принцип рекурсии прост - функция вызывает саму себя с менее
          сложной проблемой, пока проблему нельзя решить без рекурсии. Рекурсия
          часто используется в алгоритмах, которым требуется повторное
          выполнение процесса с другим входом или набором входных данных каждый
          раз.
        </SubPara>
        <SubPara>
          Существуют две основные части рекурсивной функции: базовый случай,
          который определяет условие остановки (когда функция больше не вызывает
          себя), и рекурсивный случай (где функция вызывает саму себя с
          обновленными входными параметрами).
        </SubPara>
        <SubPara>
          Рекурсия является мощным инструментом для решения сложных проблем,
          имеющих несколько шагов, где каждый шаг требует того же типа
          вычислений, что и предыдущий шаг. Она часто используется в структурах
          данных, таких как деревья и графы, где структура данных естественным
          образом рекурсивна.
        </SubPara>
      </Paragraph>
      <Paragraph title="5. АЛГОРИТМЫ ПОИСКА" id="searching">
        <SubPara>
          Алгоритмы поиска в массиве - это набор техник и методов, которые
          используются для поиска определенных элементов или значений в массиве
          или списке элементов. Существует несколько популярных алгоритмов
          поиска в массиве, которые обычно используются, включая линейный поиск,
          двоичный поиск, интерполяционный поиск и экспоненциальный поиск.
        </SubPara>
        <SubPara>
          1. Линейный поиск: это простейший алгоритм поиска, который ищет каждый
          элемент массива или списка и сравнивает его с целевым элементом до тех
          пор, пока не будет найдено соответствие. Линейный поиск имеет
          временную сложность O(n), где n - размер массива.
        </SubPara>
        <SubPara>
          2. Двоичный поиск: это более эффективный алгоритм, который требует,
          чтобы массив был отсортирован в порядке. Он начинает свой поиск
          целевого элемента, рассматривая среднюю точку массива, а затем
          устраняет половину элементов, сравнивая целевой элемент с серединой.
          Двоичный поиск имеет временную сложность O(log n), где n - размер
          массива.
        </SubPara>
        <SubPara>
          3. Интерполяционный поиск: это еще один вариант двоичного поиска,
          который используется, когда элементы в массиве равномерно
          распределены. Он использует формулу для оценки местоположения целевого
          элемента в массиве, а затем выполняет двоичный поиск. Интерполяционный
          поиск имеет временную сложность O(log log n), что быстрее, чем
          двоичный поиск.
        </SubPara>
        <SubPara>
          4. Экспоненциальный поиск: это гибридный алгоритм, который объединяет
          как линейный, так и двоичный поиск. Он начинает поиск, рассматривая
          первый элемент, а затем увеличивает интервал в степени двойки до тех
          пор, пока не будет найден целевой элемент. Экспоненциальный поиск
          имеет временную сложность O(log n), что также совпадает с двоичным
          поиском.
        </SubPara>
        <SubPara>
          В целом, выбор конкретного алгоритма поиска в массиве зависит от
          размера массива, распределения элементов в массиве и количества
          времени, доступного для поиска.
        </SubPara>
      </Paragraph>
      <Paragraph title="6. АЛГОРИТМЫ СОРТИРОВКИ" id="sorting">
        <SubPara>1</SubPara>
      </Paragraph>
      <Paragraph title="7. QUEUE И STACK" id="queues">
        <SubPara>1</SubPara>
      </Paragraph>
      <Paragraph title="8. ЭВРИСТИЧЕСКИЕ МЕТОДЫ" id="heuristic-methods">
        <SubPara>1</SubPara>
      </Paragraph>
      <Paragraph title="9. ХЭШ-ТАБЛИЦЫ И ХЭШ-ФУНКЦИИ" id="hashmap">
        <SubPara>
          Хеш-таблицы - это тип структуры данных, позволяющий эффективно хранить
          и извлекать пары {'"ключ-значение"'}. Они используют хеш-функцию для
          отображения каждого ключа в индекс массива, что позволяет мгновенно
          находить значения. Это делает хеш-таблицы полезными для задач, где
          важно быстрое время поиска, таких как кэширование, индексирование и
          операции с базами данных. Однако могут возникать коллизии, когда два
          разных ключа отображаются на один и тот же индекс, что требует
          дополнительных шагов для разрешения конфликтов. В целом, хеш-таблицы
          предоставляют мощный инструмент для организации и эффективного доступа
          к данным.
        </SubPara>
      </Paragraph>
      <Paragraph
        title="10. НЕВЗВЕШЕННЫЙ ГРАФ И АЛГОРИТМЫ ПОИСКА"
        id="unweighted-graph"
      >
        <SubPara>1</SubPara>
      </Paragraph>
      <Paragraph
        title="11. ВЗВЕШЕННЫЙ ГРАФ И АЛГОРИТМЫ НАХОЖДЕНИЯ КРАТЧАЙШЕГО ПУТИ"
        id="weighted-graph"
      >
        <SubPara>1</SubPara>
      </Paragraph>
      <Paragraph title="12. ДЕРЕВЬЯ И АЛГОРИТМЫ ДЛЯ РАБОТЫ С НИМИ" id="trees">
        <SubPara>1</SubPara>
      </Paragraph>
      <Paragraph title="13. ЖАДНЫЕ АЛГОРИТМЫ" id="greedy-algorithms">
        <SubPara>1</SubPara>
      </Paragraph>
      <Paragraph
        title="14. ДИНАМИЧЕСКОЕ ПРОГРАММИРОВАНИЕ"
        id="dynamic-programming"
      >
        <SubPara>1</SubPara>
      </Paragraph>
    </Box>
  );
};

export default AlgorithmsParagraphs;
