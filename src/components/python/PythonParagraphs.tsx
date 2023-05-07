import type {
  Paragraph as TParagraph,
  SubPara,
} from "@/types/paragraphs";
import Box from "@mui/material/Box";
import Paragraph from "../layout/page/paragraph/Paragraph";
import TextSubPara from "../layout/page/paragraph/TextSubPara";
import CodeSection from "../layout/page/paragraph/CodeSection";
import CodeLine from "../layout/page/paragraph/CodeLine";

const PythonParagraphs = () => {
  return (
    <Box>
      <Paragraph title="ОСНОВНЫЕ УЧЕБНЫЕ РЕСУРСЫ">
        <TextSubPara>
          В интернете существует много различных курсов по изучению
          языка Python, но некоторые из них сосредоточены на ненужных
          нам темах. Что нам нужно для олимпиады - это синтаксис
          Python, основы программирования, знание его библиотек и
          знакомство с алгортимами и структурами данных
        </TextSubPara>
        <TextSubPara>
          Для этих целей нам подойдут курсы, перечисленные в статье:{" "}
          <a>https://www.freecodecamp.org/news/best-python-courses</a>
          , из которых я рекоммендую краш-курс от Гугла, но не бойтесь
          выбирать варианты, удобные лично для вас. Если вас
          интересуют курсы на русском языке, то вам подойдет курс
          Густокашина:{" "}
          <a>
            https://www.coursera.org/learn/python-osnovy-programmirovaniya
          </a>
        </TextSubPara>
        <TextSubPara>
          Независимо от выбранного вами курса, не забудьте, что для
          олимпиады обязательно нужны выше перечисленные темы. А
          сейчас мы как раз и познакомимся с этими темами и языком
          Python. Не волнуйтесь, если что-то не поняли - это случается
          у всех, и после прохождения выбранных курсов, у вас сложится
          ясная картина
        </TextSubPara>
      </Paragraph>
      <Paragraph title="1. УСТАНОВКА PYTHON И IDE">
        <TextSubPara>
          Лучший способ учения - практика. Именно поэтому первым делом
          мы скачаем Python и приложение для работы с ним.
        </TextSubPara>
        <TextSubPara>
          Python можно установить на компьютер с официального сайта:{" "}
          <a>https://www.python.org/downloads</a>
        </TextSubPara>
        <TextSubPara>
          Существует много разных IDE (Integrated Development
          Environment) для разработки на Python, но новичкам больше
          подходит VS Code, так как он бесплатный и лёгкий, а также
          для можно скачать расширения, которые вам помогут. VS Code
          можно скачать здесь:{" "}
          <a>https://code.visualstudio.com/download</a>
        </TextSubPara>
        <TextSubPara>
          Также можно работать с Python в консоли (Win + X, выбираем
          PowerShell или Command Line). Основное отличие между работе
          в IDE и консолью помимо удобства и внешнего вида является
          то, что в IDE мы пишем целую программу, состоящую из
          множества команд. А в консоли мы даем компьютеру отдельные
          команды и сразу получаем ответ:
        </TextSubPara>
        <CodeSection>
          <CodeLine>10 + 2</CodeLine>
          <CodeLine>12</CodeLine>
        </CodeSection>
      </Paragraph>
      <Paragraph title="2. НАЗНАЧЕНИЕ ПЕРЕМЕННЫХ">
        <TextSubPara>
          Переменные в программировании - тоже самое, что и в
          математике. Только вместо x или y, мы называем переменную
          понятнее. Например, если мы хотим хранить имя пользователя,
          мы назовём переменную user_name.
        </TextSubPara>
        <TextSubPara>
          Чтобы обозначить переменную в Python, надо поставить между
          названием переменной и её значением знак равно:
        </TextSubPara>
        <CodeSection>
          <CodeLine>{'user_name = "Alex"'}</CodeLine>
        </CodeSection>
        <TextSubPara>
          Вроде бы все прямолинейно, но что это за кавычки?
        </TextSubPara>
      </Paragraph>
      <Paragraph title="3. БАЗОВЫЕ ТИПЫ ДАННЫХ">
        <TextSubPara>
          Дело в том, что переменная может принимать разные значения -
          строки, числа, символы и многое другое. Чтобы отличать тип
          строк от других, вокруг них и надо ставить кавычки.
        </TextSubPara>
        <TextSubPara>
          В Python есть 5 основных типов данных:
          <Box component="ol" sx={{ pl: 3 }}>
            <li>Integers - целые числа</li>
            <li>Floating-point numbers - рациональные числа</li>
            <li>Strings - строки, текст</li>
            <li>Boolean - правда или ложь</li>
            <li>None - отсутсвие</li>
          </Box>
        </TextSubPara>
        <CodeSection>
          <CodeLine type="NO_CONSOLE">integer = 1</CodeLine>
          <CodeLine type="NO_CONSOLE">
            floating_point = 0.995
          </CodeLine>
          <CodeLine type="NO_CONSOLE">
            string = “hello, world”
          </CodeLine>
          <CodeLine type="NO_CONSOLE">boolean = True</CodeLine>
          <CodeLine type="NO_CONSOLE">nothing = None</CodeLine>
        </CodeSection>
      </Paragraph>
      <Paragraph title="4. МАТЕМАТИЧЕСКИЕ ОПЕРАТОРЫ">
        <TextSubPara>
          Но что нам делать с этими переменными? Всё что угодно, мы
          можем их складывать, умножать, делить, вычитать, проводидить
          над ними множество разных операций:
        </TextSubPara>
        <CodeSection>
          <CodeLine>integer1 = 10</CodeLine>
          <CodeLine>integer2 = 2</CodeLine>
          <CodeLine>integer1 + integer2</CodeLine>
          <CodeLine>12</CodeLine>
        </CodeSection>
        <TextSubPara>
          У нас получилось тоже самое, что и при обычном сложении этих
          чисел:
        </TextSubPara>
        <CodeSection>
          <CodeLine>10 + 2</CodeLine>
          <CodeLine>12</CodeLine>
        </CodeSection>
        <TextSubPara>
          Проводить такие операции можно как в математике - с помощью
          математических операторов: + - сложение, - - вычитание, * -
          умножение, / - деление
        </TextSubPara>
      </Paragraph>
      <Paragraph title="5. ПРОЦЕДУРЫ И ФУНКЦИИ">
        <TextSubPara>
          Начнем с понятия операции. Операция - это простая команда
          компьютеру. Он выполняет команду и, если надо, выдает ответ.
          Например, операцией можно назвать то же самое сложение:
        </TextSubPara>
        <CodeSection>
          <CodeLine comment="- операция">10 + 2</CodeLine>
          <CodeLine comment="- ответ">12</CodeLine>
        </CodeSection>
        <TextSubPara>
          Чтобы не выписывать каждый раз сложные математические
          операции, мы можем назначить функции, принимающие нужные нам
          числа как аргументы:
        </TextSubPara>
        <CodeSection>
          <CodeLine>
            def sum(num1, num2): result = num1 + num2 return result
          </CodeLine>
          <CodeLine>sum(10, 2)</CodeLine>
          <CodeLine>12</CodeLine>
        </CodeSection>
        <TextSubPara>
          Кодовое слово return возвращает из функции нужное нам
          значение - result. Мы можем присвоить его к переменной и
          использовать дальше в программе:
        </TextSubPara>
        <CodeSection>
          <CodeLine>result = sum(10, 2)</CodeLine>
          <CodeLine>print(result)</CodeLine>
          <CodeLine>12</CodeLine>
        </CodeSection>
        <TextSubPara>
          Если же нам надо просто выполнить какие-нибудь операции без
          возвращения результатов, то таким же образом мы можем
          назначить процедуру. Она отличается от функции только
          отсутствием кодового слова return. В Питоне принято писать в
          таком случае слово pass:
        </TextSubPara>
        <CodeSection>
          <CodeLine>
            def yell(str): result = str.upper() print(result) pass
          </CodeLine>
          <CodeLine>yell(“привет”)</CodeLine>
          <CodeLine type="CLOSE" comment="- сообщение в консоли">
            ПРИВЕТ
          </CodeLine>
          <CodeLine comment="- ничего не возвратило">None</CodeLine>
        </CodeSection>
      </Paragraph>
      <Paragraph title="6. ОПЕРАТОРЫ УСЛОВИЯ">
        <TextSubPara>
          Чтобы воплощать в программе более сложную логику нам нужны
          операторы условия. Например, если нам нужно проверить
          возраст пользователя и предоставить доступ к ресурсу если
          ему 18 лет или больше:
        </TextSubPara>
        <CodeSection>
          <CodeLine>{"if age >= 18:\n access = True"}</CodeLine>
        </CodeSection>
        <TextSubPara>
          {
            "Чтобы воплотить эту логику, нужно поставить перед условием (возраст 18 лет или больше) кодовое слово if. Равно или больше обозначается знаком >=. Такие знаки схожи с математическими:"
          }
        </TextSubPara>
        <TextSubPara>
          <Box component="ol" sx={{ pl: 3 }}>
            <li>{"== - равно"}</li>
            <li>{"> - больше"}</li>
            <li>{"< - меньше"}</li>
            <li>{">= - больше или равно"}</li>
            <li>{"<= - меньше или равно"}</li>
            <li>{"!= - не равно"}</li>
          </Box>
        </TextSubPara>
        <TextSubPara>
          Существуют также кодовые слова else и elif, для того, чтобы
          выполнить команду если начальное условие не выполняется:
        </TextSubPara>
        <CodeSection>
          <CodeLine>{"if age >= 18:\n access = True"}</CodeLine>
          <CodeLine>{"else:\n access = False"}</CodeLine>
        </CodeSection>
        <TextSubPara>
          Однако в нашем конкретном случае намного проще сразу
          присвоить значение условия переменной access, так как
          условия - тоже процедуры, возвращающие значение True или
          False:
        </TextSubPara>
        <CodeSection>
          <CodeLine>{"access = age >= 18"}</CodeLine>
        </CodeSection>
      </Paragraph>
      <Paragraph title="7. ОПЕРАТОРЫ ЦИКЛА">
        <TextSubPara>
          Также в любом языке программирования нам нужны операторы
          цикла. Они отвечают за случаи, когда нам надо повторять
          операцию множество раз.
        </TextSubPara>
        <TextSubPara>
          Например, если мы хотим досчитать до 100, нам нужно
          добавлять к начальному числу по единице, пока оно не станет
          ровно 100:
        </TextSubPara>
        <CodeSection>
          <CodeLine>
            {"while num <= 100:\n num = num + 1\n print(num)"}
          </CodeLine>
          <CodeLine>1</CodeLine>
          <CodeLine>2</CodeLine>
          <CodeLine>...</CodeLine>
          <CodeLine>100</CodeLine>
        </CodeSection>
        <TextSubPara>
          {
            "Для использования цикла в Python, надо использовать кодовые слова: while, do ... while, for. Цикл while выполняется пока правдиво условие стоящее после него (num <= 100). Цикл do ... while отличается от предыдущего только тем, что если его условие не выполняется, он все равно выполнит операцию один раз."
          }
        </TextSubPara>
        <TextSubPara>
          Цикл for выполняется определённое количество раз. Это
          количество мы передаем с встроенной функцией range:
        </TextSubPara>
        <CodeSection>
          <CodeLine>{"for num in range(100):\n print(num)"}</CodeLine>
          <CodeLine>1</CodeLine>
          <CodeLine>2</CodeLine>
          <CodeLine>...</CodeLine>
          <CodeLine>100</CodeLine>
        </CodeSection>
      </Paragraph>
      <Paragraph title="8. СИНТАКСИС PYTHON">
        <TextSubPara>
          Можно заметили, что назначение функций, условий и циклов
          сходится в том, что их содержимое сдвинуто вправо, а после
          названия функции, условия или цикла стоит знак двоеточия
          (:). Если их убрать, то Python выдаст ошибку и программа не
          будет работать:
        </TextSubPara>
        <CodeSection>
          <CodeLine type="comment"># правильно</CodeLine>
          <CodeLine>{"def say(str):\n print(str)"}</CodeLine>
          <CodeLine type="comment"># неправильно</CodeLine>
          <CodeLine>{"def say(str):\n print(str)"}</CodeLine>
        </CodeSection>
        <TextSubPara>
          Также видно, что для выполнения функции, после ее названия
          нужно поставить круглые скобки, внутри которых при
          необходимости вставить аргументы. А чтобы написать
          какое-нибудь объяснение, перед ним надо поставить хэштег
          (#), чтобы Python не выполнял написаное.
        </TextSubPara>
        <TextSubPara>
          Такие детали у каждого языка программирования различаются.
          Лучший способ их запомнить - практиковаться, после недели
          писания на Python, вы научитесь ставить их автоматически.
        </TextSubPara>
      </Paragraph>
      <Paragraph title="9. ТЕСТИРОВАНИЕ И ДЕБАГ">
        <TextSubPara>
          Тестирование - это процесс проверки программного обеспечения
          путем его выполнения с различными входными данными и
          наблюдения за выходными.
        </TextSubPara>
        <TextSubPara>
          Python предоставляет встроенные библиотеки для помощи в
          тестировании, такие как модуль unittest. Он предоставляет
          классы и методы, которые позволяют легко настраивать
          тестовые случаи и запускать их.
        </TextSubPara>
        <TextSubPara>
          Дебаг является еще одним важным аспектом разработки
          программного обеспечения. Это процесс нахождения и
          устранения ошибок или багов в коде.
        </TextSubPara>
        <TextSubPara>
          Python предоставляет различные инструменты для упрощения
          отладки кода:
        </TextSubPara>
        <TextSubPara>
          1. Один из распространенных инструментов использовать
          операторы print для регистрации значения переменных или
          выходных данных на критических точках в программе
        </TextSubPara>
        <TextSubPara>
          2. Еще один инструмент - это использование отладочных
          библиотек, таких как pdb или ipdb, которые позволяют
          приостанавливать выполнение в определенных точках и изучать
          переменные или конкретные компоненты, которые, по вашему
          мнению, могут вызвать проблему.
        </TextSubPara>
      </Paragraph>
      <Paragraph title="10. БИБЛИОТЕКИ PYTHON">
        <TextSubPara>
          Python является очень универсальным языком с широким
          спектром стандартных библиотек, доступных для разработчиков.
          Эти библиотеки предоставляют много функциональности, которую
          можно использовать в различных программах. Вот некоторые из
          наиболее полезных на олимпиаде библиотек Python:
        </TextSubPara>
        <TextSubPara>
          1. **collections** - Эта библиотека предоставляет
          дополнительные структуры данных, отличные от встроенных. Она
          включает классы, такие как OrderedDict, defaultdict и
          Counter.
        </TextSubPara>
        <TextSubPara>
          2. **math** - Эта библиотека предоставляет математические
          функции, такие как тригонометрические функции, логарифмы и
          константы, такие как pi и e.
        </TextSubPara>
        <TextSubPara>
          3. **random** - Эта библиотека предоставляет функции для
          генерации случайных чисел. Она позволяет генерировать
          случайные целые числа, числа с плавающей точкой и случайные
          выборки из списков.
        </TextSubPara>
        <TextSubPara>
          4. **re** - Эта библиотека предоставляет поддержку
          регулярных выражений. Она позволяет искать и заменять
          шаблоны в строках.
        </TextSubPara>
        <TextSubPara>
          Это только некоторые из наиболее популярных стандартных
          библиотек Python. Их существует много других, которые
          предоставляют дополнительную функциональность для работы с
          базами данных, сетями, графикой и многим другим.
        </TextSubPara>
      </Paragraph>
      <Paragraph title="ЗАКЛЮЧЕНИЕ">
        <TextSubPara>
          Ну вот и все, на этом пока можно закончить изучение Python.
          Знание этих тем должно хватить для олимпиады, но не стоит
          останавливаться на достигнутом, продолжайте практикаваться и
          развиваться, ведь от этого шансы успеха на олимпиаде только
          увеличатся
        </TextSubPara>
      </Paragraph>
    </Box>
  );
};

export default PythonParagraphs;
