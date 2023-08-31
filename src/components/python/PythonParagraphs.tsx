import Box from "@mui/material/Box";

import TextSpan from "../general-page/chapter-section/TextSpan";
import Chapter from "../general-page/chapter-section/Chapter";
import Paragraph from "../general-page/chapter-section/Paragraph";
import CodeSection from "./code-section/CodeSection";
import CodeLine from "./code-section/CodeLine";

const PythonParagraphs = () => {
  return (
    <Box>
      <Chapter title="ОСНОВНЫЕ УЧЕБНЫЕ РЕСУРСЫ" id="resources">
        <Paragraph>
          В интернете существует много различных курсов по изучению Питона, но
          большинство из них сосредоточены на ненужных нам темах. Что нам нужно
          для олимпиады - это основы программирования, синтаксис Python, знание
          его библиотек и знакомство с алгортимами и структурами данных
        </Paragraph>
        <Paragraph>
          Для этих целей нам подойдут курсы, перечисленные в статье:{" "}
          <TextSpan type="link" href="this">
            https://www.freecodecamp.org/news/best-python-courses
          </TextSpan>
          , из которых я могу порекомендовать краш-курс от Гугла, но не бойтесь
          выбирать варианты, удобные лично для вас. Если вас интересуют курсы на
          русском языке, то вам может подойти курс Густокашина:{" "}
          <TextSpan type="link" href="this">
            https://www.coursera.org/learn/python-osnovy-programmirovaniya
          </TextSpan>
        </Paragraph>
        <Paragraph>
          Независимо от выбранного вами курса, не забудьте, что для достижения
          успеха в олимпиадах объязательно нужно выше перечисленные темы. Сейчас
          мы как раз и познакомимся с этими темами и языком Python в целом. Не
          волнуйтесь, если что-то не поняли - все когда-то начинали, и после
          прохождения выбранных вами курсов, у вас сложится ясная цельная
          картина
        </Paragraph>
      </Chapter>
      <Chapter title="1. УСТАНОВКА PYTHON И IDE" id="installation">
        <Paragraph>
          Лучший способ учения - практика. Именно поэтому первым делом мы
          скачаем Python и приложение для работы с ним.
        </Paragraph>
        <Paragraph>
          Python можно установить на компьютер с официального сайта:{" "}
          <TextSpan type="link" href="this">
            https://www.python.org/downloads
          </TextSpan>
        </Paragraph>
        <Paragraph>
          Существует много разных IDE (Integrated Development Environment) для
          разработки на Python, но новичкам лучше подойдет VS Code, так как он
          бесплатный и лёгкий, а также на него можно установить расширения,
          которые вам помогут. VS Code можно скачать здесь:{" "}
          <TextSpan type="link" href="this">
            https://code.visualstudio.com/download
          </TextSpan>
        </Paragraph>
        <Paragraph>
          Также можно работать с Python в консоли (Win + X, выбираем PowerShell
          или Command Line). Основное отличие между работами в IDE и консолью,
          помимо удобства и внешнего вида является то, что в IDE мы пишем целую
          программу, состоящую из множества команд. А в консоли мы даем
          компьютеру отдельные команды и сразу получаем ответ:
        </Paragraph>
        <CodeSection>
          <CodeLine>
            <TextSpan>10</TextSpan> + <TextSpan>2</TextSpan>
          </CodeLine>
          <CodeLine type="response">12</CodeLine>
        </CodeSection>
      </Chapter>
      <Chapter title="2. НАЗНАЧЕНИЕ ПЕРЕМЕННЫХ" id="variables">
        <Paragraph>
          Переменные в программировании - тоже самое, что и в математике. Только
          вместо <TextSpan type="var-red">x</TextSpan> или{" "}
          <TextSpan type="var-red">y</TextSpan>, мы называем переменную понятнее
          и можем присваивать ей любые значения, а не только числа. Например,
          если мы хотим хранить имя пользователя, мы назовём переменную{" "}
          <TextSpan type="var-blue">user_name</TextSpan>.
        </Paragraph>
        <Paragraph>
          Чтобы обозначить переменную в Python, надо поставить знак равно между
          названием переменной и её значением:
        </Paragraph>
        <CodeSection>
          <CodeLine type="centered">
            <TextSpan>user_name</TextSpan> = <TextSpan>{'"Alex"'}</TextSpan>
          </CodeLine>
        </CodeSection>
        <Paragraph>
          Вроде бы все прямолинейно, но зачем нужны эти кавычки?
        </Paragraph>
      </Chapter>
      <Chapter title="3. БАЗОВЫЕ ТИПЫ ДАННЫХ" id="data-types">
        <Paragraph>
          Дело в том, что переменная в Питоне может принимать разные значения -
          строки, числа, символы и многое другое. Чтобы отличать тип строк от
          других, вокруг них надо ставить кавычки.
        </Paragraph>
        <Paragraph>
          В Python есть 5 основных типов данных:
          <Box component="ol" sx={{ pl: 3 }}>
            <li>
              <TextSpan type="highlight">Integers</TextSpan> - целые числа
            </li>
            <li>
              <TextSpan type="highlight">Floating-point numbers</TextSpan> -
              рациональные числа
            </li>
            <li>
              <TextSpan type="highlight">Strings</TextSpan> - строки, текст
            </li>
            <li>
              <TextSpan type="highlight">Boolean</TextSpan> - правда или ложь
            </li>
            <li>
              <TextSpan type="highlight">None</TextSpan> - отсутсвие данных
            </li>
          </Box>
        </Paragraph>
        <CodeSection>
          <CodeLine type="no-console">
            <TextSpan type="variable">integer</TextSpan> ={" "}
            <TextSpan>1</TextSpan>
          </CodeLine>
          <CodeLine type="no-console">
            <TextSpan type="variable">floating_point</TextSpan> ={" "}
            <TextSpan>0.995</TextSpan>
          </CodeLine>
          <CodeLine type="no-console">
            <TextSpan type="variable">string</TextSpan> ={" "}
            <TextSpan>{'"hello, world"'}</TextSpan>
          </CodeLine>
          <CodeLine type="no-console">
            <TextSpan type="variable">boolean</TextSpan> ={" "}
            <TextSpan>True</TextSpan>
          </CodeLine>
          <CodeLine type="no-console">
            <TextSpan type="variable">nothing</TextSpan> ={" "}
            <TextSpan>None</TextSpan>
          </CodeLine>
        </CodeSection>
      </Chapter>
      <Chapter title="4. МАТЕМАТИЧЕСКИЕ ОПЕРАТОРЫ" id="arithmetic-operations">
        <Paragraph>
          Но что нам делать с этими переменными? - Всё что угодно, мы можем их
          складывать, умножать, делить, вычитать, проводидить над ними множество
          разных операций:
        </Paragraph>
        <CodeSection>
          <CodeLine>
            <TextSpan type="variable">integer1</TextSpan> ={" "}
            <TextSpan>10</TextSpan>
          </CodeLine>
          <CodeLine>
            <TextSpan type="variable">integer2</TextSpan> ={" "}
            <TextSpan>2</TextSpan>
          </CodeLine>
          <CodeLine>
            <TextSpan type="variable">integer1</TextSpan> +{" "}
            <TextSpan type="variable">integer2</TextSpan>
          </CodeLine>
          <CodeLine type="response">12</CodeLine>
        </CodeSection>
        <Paragraph>
          У нас получится тоже самое, что и при обычном сложении этих чисел:
        </Paragraph>
        <CodeSection>
          <CodeLine>
            <TextSpan>10</TextSpan> + <TextSpan>2</TextSpan>
          </CodeLine>
          <CodeLine type="response">12</CodeLine>
        </CodeSection>
        <Paragraph>
          Проводить эти операции можно так же, как и в математике - с помощью
          математических операторов:{" "}
          <TextSpan type="highlight bold">+</TextSpan> - сложение,{" "}
          <TextSpan type="highlight bold">-</TextSpan> - вычитание,{" "}
          <TextSpan type="highlight bold">*</TextSpan> - умножение,{" "}
          <TextSpan type="highlight bold">/</TextSpan> - деление
        </Paragraph>
      </Chapter>
      <Chapter title="5. ПРОЦЕДУРЫ И ФУНКЦИИ" id="functions">
        <Paragraph>
          Начнем с понятия операции. Операция - это простая команда компьютеру.
          Он выполняет команду и, если надо, выдает ответ. Например, операцией
          можно назвать то же самое сложение:
        </Paragraph>
        <CodeSection>
          <CodeLine comment="- операция">
            <TextSpan>10</TextSpan> + <TextSpan>2</TextSpan>
          </CodeLine>
          <CodeLine comment="- ответ" type="response">
            12
          </CodeLine>
        </CodeSection>
        <Paragraph>
          Чтобы не выписывать каждый раз сложные математические операции, мы
          можем назначить функции, принимающие нужные нам числа как аргументы:
        </Paragraph>
        <CodeSection>
          <CodeLine>
            <TextSpan>def</TextSpan> <TextSpan>sum</TextSpan>(
            <TextSpan>num1</TextSpan>, <TextSpan>num2</TextSpan>):
            <CodeLine type="inner">
              <TextSpan>result</TextSpan> = <TextSpan>num1</TextSpan> +{" "}
              <TextSpan>num2</TextSpan>
            </CodeLine>
            <CodeLine type="inner">
              <TextSpan>return</TextSpan> <TextSpan>result</TextSpan>
            </CodeLine>
          </CodeLine>
          <CodeLine>
            <TextSpan>sum</TextSpan>(<TextSpan>10</TextSpan>,{" "}
            <TextSpan>2</TextSpan>)
          </CodeLine>
          <CodeLine type="response">12</CodeLine>
        </CodeSection>
        <Paragraph>
          Кодовое слово <TextSpan type="keyword">return</TextSpan> возвращает из
          функции нужное нам значение -{" "}
          <TextSpan type="result">result</TextSpan>. Мы можем присвоить его к
          переменной и использовать дальше в программе:
        </Paragraph>
        <CodeSection>
          <CodeLine>
            <TextSpan>result</TextSpan> = <TextSpan>sum</TextSpan>(
            <TextSpan>10</TextSpan>, <TextSpan>2</TextSpan>)
          </CodeLine>
          <CodeLine>
            <TextSpan>print</TextSpan>(<TextSpan>result</TextSpan>)
          </CodeLine>
          <CodeLine type="response">12</CodeLine>
        </CodeSection>
        <Paragraph>
          Если же нам надо просто выполнить какие-нибудь операции без
          возвращения результатов, то таким же образом мы можем назначить
          процедуру. Она отличается от функции только отсутствием кодового слова{" "}
          <TextSpan>return</TextSpan>. В Питоне принято писать в таком случае
          слово <TextSpan>pass</TextSpan>:
        </Paragraph>
        <CodeSection>
          <CodeLine>
            <TextSpan>def</TextSpan> <TextSpan>yell</TextSpan>(
            <TextSpan>str</TextSpan>):
            <CodeLine type="inner">
              <TextSpan>result</TextSpan> = <TextSpan>str</TextSpan>.
              <TextSpan>upper</TextSpan>()
            </CodeLine>
            <CodeLine type="inner">
              <TextSpan>print</TextSpan>(<TextSpan>result</TextSpan>){" "}
            </CodeLine>
            <CodeLine type="inner">
              <TextSpan>pass</TextSpan>
            </CodeLine>
          </CodeLine>
          <CodeLine>
            <TextSpan>yell</TextSpan>(<TextSpan>“привет”</TextSpan>)
          </CodeLine>
          <CodeLine type="print" comment="- сообщение в консоли">
            ПРИВЕТ
          </CodeLine>
          <CodeLine type="response" comment="- ничего не возвратило">
            None
          </CodeLine>
        </CodeSection>
      </Chapter>
      <Chapter title="6. ОПЕРАТОРЫ УСЛОВИЯ" id="conditions">
        <Paragraph>
          Чтобы воплощать в программе более сложную логику нам нужны операторы
          условия. Например, если нам нужно проверить возраст пользователя и
          предоставить доступ к ресурсу если ему 18 лет или больше:
        </Paragraph>
        <CodeSection>
          <CodeLine>
            <TextSpan>if</TextSpan> <TextSpan>age</TextSpan> {">="}{" "}
            <TextSpan>18</TextSpan>:
            <CodeLine type="inner">
              <TextSpan>access</TextSpan> = <TextSpan>True</TextSpan>
            </CodeLine>
          </CodeLine>
        </CodeSection>
        <Paragraph>
          Чтобы воплотить эту логику, нужно поставить перед условием (возраст 18
          лет или больше) кодовое слово if. Равно или больше обозначается знаком{" "}
          {">="}. Такие знаки схожи с математическими:
        </Paragraph>
        <Paragraph type="ordered-list">
          <li>
            <TextSpan type="highlight bold">{"=="}</TextSpan> - равно
          </li>
          <li>
            <TextSpan type="highlight bold">{">"}</TextSpan> - больше
          </li>
          <li>
            <TextSpan type="highlight bold">{"<"}</TextSpan> - меньше
          </li>
          <li>
            <TextSpan type="highlight bold">{">="}</TextSpan> - больше или равно
          </li>
          <li>
            <TextSpan type="highlight bold">{"<="}</TextSpan> - меньше или равно
          </li>
          <li>
            <TextSpan type="highlight bold">{"!="}</TextSpan> - не равно
          </li>
        </Paragraph>
        <Paragraph>
          Существуют также кодовые слова else и elif, для того, чтобы выполнить
          команду если начальное условие не выполняется:
        </Paragraph>
        <CodeSection>
          <CodeLine>
            <TextSpan>if</TextSpan> <TextSpan>age</TextSpan> {">="}{" "}
            <TextSpan>18</TextSpan>:
            <CodeLine type="inner">
              <TextSpan>access</TextSpan> = <TextSpan>True</TextSpan>
            </CodeLine>
          </CodeLine>
          <CodeLine>
            <TextSpan>else</TextSpan>:
            <CodeLine type="inner">
              <TextSpan>access</TextSpan> = <TextSpan>False</TextSpan>
            </CodeLine>
          </CodeLine>
        </CodeSection>
        <Paragraph>
          Однако в нашем конкретном случае намного проще сразу присвоить
          значение условия переменной access, так как условия - тоже операции,
          возвращающие значение True или False:
        </Paragraph>
        <CodeSection>
          <CodeLine type="centered">
            <TextSpan>access</TextSpan> = <TextSpan>age</TextSpan> {">="}{" "}
            <TextSpan>18</TextSpan>
          </CodeLine>
        </CodeSection>
      </Chapter>
      <Chapter title="7. ОПЕРАТОРЫ ЦИКЛА" id="cycles">
        <Paragraph>
          Также в любом языке программирования нам нужны операторы цикла. Они
          отвечают за случаи, когда нам надо повторять операцию множество раз.
        </Paragraph>
        <Paragraph>
          Например, если мы хотим досчитать до 100, то вместо того, чтобы
          вручную писать команду <TextSpan>print</TextSpan> для каждого числа,
          можно просто запустить цикл и добавлять к начальному числу по единице,
          пока оно не станет ровно 100:
        </Paragraph>
        <CodeSection>
          <CodeLine>
            <TextSpan>while</TextSpan> <TextSpan>num</TextSpan> {"<="}{" "}
            <TextSpan>100</TextSpan>:
            <CodeLine type="inner">
              <TextSpan>num</TextSpan> = <TextSpan>num</TextSpan> +{" "}
              <TextSpan>1</TextSpan>
            </CodeLine>
            <CodeLine type="inner">
              <TextSpan>print</TextSpan>(<TextSpan>num</TextSpan>)
            </CodeLine>
          </CodeLine>
          <CodeLine type="response">1</CodeLine>
          <CodeLine type="response">2</CodeLine>
          <CodeLine type="response">...</CodeLine>
          <CodeLine type="response">100</CodeLine>
        </CodeSection>
        <Paragraph>
          Для создания цикла в Питоне, нужно использовать кодовые слова:{" "}
          <TextSpan type="keyword">while</TextSpan>,{" "}
          <TextSpan type="keyword">do ... while</TextSpan>,{" "}
          <TextSpan type="keyword">for</TextSpan>. Цикл{" "}
          <TextSpan type="keyword">while</TextSpan> выполняется пока правдиво
          условие стоящее после него (num {"<="} 100). Цикл{" "}
          <TextSpan type="keyword">do ... while</TextSpan> отличается от
          предыдущего только тем, что если его условие не выполняется, он все
          равно выполнит операцию один раз.
        </Paragraph>
        <Paragraph>
          Цикл for выполняется определённое количество раз. Это количество мы
          передаем с встроенной функцией <TextSpan>range</TextSpan>:
        </Paragraph>
        <CodeSection>
          <CodeLine>
            <TextSpan>for</TextSpan> <TextSpan>num</TextSpan>{" "}
            <TextSpan>in</TextSpan> <TextSpan>range</TextSpan>(
            <TextSpan>100</TextSpan>):{" "}
            <CodeLine type="inner">
              <TextSpan>print</TextSpan>(<TextSpan>num</TextSpan>)
            </CodeLine>
          </CodeLine>
          <CodeLine type="response">1</CodeLine>
          <CodeLine type="response">2</CodeLine>
          <CodeLine type="response">...</CodeLine>
          <CodeLine type="response">100</CodeLine>
        </CodeSection>
      </Chapter>
      <Chapter title="8. СИНТАКСИС PYTHON" id="syntax">
        <Paragraph>
          Можно заметить, что назначения функций, условий и циклов внешне
          сходятся в том, что их содержимое сдвинуто вправо, а после названия
          функции, условия или цикла стоит знак двоеточия (
          <TextSpan type="highlight bold">:</TextSpan>). Если их убрать, то
          Python выдаст ошибку и программа не будет работать:
        </Paragraph>
        <CodeSection>
          <CodeLine type="comment"># правильно</CodeLine>
          <CodeLine>
            <TextSpan>def</TextSpan> <TextSpan>say</TextSpan>(
            <TextSpan>str</TextSpan>):
            <CodeLine type="inner">
              <TextSpan>print</TextSpan>(<TextSpan>str</TextSpan>)
            </CodeLine>
          </CodeLine>
          <CodeLine type="comment"># неправильно</CodeLine>
          <CodeLine>
            <TextSpan>def</TextSpan> <TextSpan>say</TextSpan>(
            <TextSpan>str</TextSpan>):{" "}
            <CodeLine type="inner">
              <TextSpan>print</TextSpan>(<TextSpan>str</TextSpan>)
            </CodeLine>
          </CodeLine>
        </CodeSection>
        <Paragraph>
          Также видно, что для выполнения функции, после ее названия нужно
          поставить круглые скобки, внутри которых при необходимости вставить
          аргументы. А чтобы написать какое-нибудь объяснение своему коду, перед
          ним надо поставить хэштег (
          <TextSpan type="highlight bold">#</TextSpan>), чтобы Питон не захотел
          выполнить написаное.
        </Paragraph>
        <Paragraph>
          Такие детали у каждого языка программирования различаются. Лучший
          способ их запомнить - практиковаться, после недели писания на Питоне,
          вы научитесь ставить их автоматически.
        </Paragraph>
      </Chapter>
      <Chapter title="9. ТЕСТИРОВАНИЕ И ДЕБАГ" id="testing">
        <Paragraph>
          Тестирование - это процесс проверки программного обеспечения путем его
          выполнения с различными входными данными и наблюдения за выходными.
        </Paragraph>
        <Paragraph>
          Python предоставляет встроенные библиотеки для помощи в тестировании,
          такие как модуль unittest. Он предоставляет классы и методы, которые
          позволяют легко настраивать тестовые случаи и запускать их.
        </Paragraph>
        <Paragraph>
          Дебаг является еще одним важным аспектом разработки программного
          обеспечения. Это процесс нахождения и устранения ошибок или багов в
          коде.
        </Paragraph>
        <Paragraph>
          Python предоставляет различные инструменты для упрощения отладки кода:
        </Paragraph>
        <Paragraph>
          1. Один из распространенных инструментов использовать операторы print
          для регистрации значения переменных или выходных данных на критических
          точках в программе
        </Paragraph>
        <Paragraph>
          2. Еще один инструмент - это использование отладочных библиотек, таких
          как pdb или ipdb, которые позволяют приостанавливать выполнение в
          определенных точках и изучать переменные или конкретные компоненты,
          которые, по вашему мнению, могут вызвать проблему.
        </Paragraph>
      </Chapter>
      <Chapter title="10. БИБЛИОТЕКИ PYTHON" id="libraries">
        <Paragraph>
          Python является очень универсальным языком с широким спектром
          стандартных библиотек, доступных для разработчиков. Эти библиотеки
          предоставляют много функциональности, которую можно использовать в
          различных программах. Вот некоторые из наиболее полезных на олимпиаде
          библиотек Python:
        </Paragraph>
        <Paragraph>
          1. <TextSpan type="highlight bold">collections</TextSpan> - Эта
          библиотека предоставляет дополнительные структуры данных, отличные от
          встроенных. Она включает классы, такие как OrderedDict, defaultdict и
          Counter.
        </Paragraph>
        <Paragraph>
          2. <TextSpan type="highlight bold">math</TextSpan> - Эта библиотека
          предоставляет математические функции, такие как тригонометрические
          функции, логарифмы и константы, такие как pi и e.
        </Paragraph>
        <Paragraph>
          3. <TextSpan type="highlight bold">random</TextSpan> - Эта библиотека
          предоставляет функции для генерации случайных чисел. Она позволяет
          генерировать случайные целые числа, числа с плавающей точкой и
          случайные выборки из списков.
        </Paragraph>
        <Paragraph>
          4. <TextSpan type="highlight bold">re</TextSpan> - Эта библиотека
          предоставляет поддержку регулярных выражений. Она позволяет искать и
          заменять шаблоны в строках.
        </Paragraph>
        <Paragraph>
          Это только некоторые из наиболее популярных стандартных библиотек
          Python. Их существует много других, которые предоставляют
          дополнительную функциональность для работы с базами данных, сетями,
          графикой и многим другим.
        </Paragraph>
      </Chapter>
      <Chapter title="ЗАКЛЮЧЕНИЕ">
        <Paragraph>
          Ну вот и все, на этом пока можно закончить изучение Питона (если вы
          прошли выбранный вами курс). Понимания этих тем должно хватить для
          олимпиады, но не стоит останавливаться на достигнутом, продолжайте
          практикаваться и развиваться, ведь от этого шансы успеха на олимпиаде
          только увеличатся.
        </Paragraph>
        <Paragraph>
          Теперь можно перейти на самую важную часть подготовки - алгоритмы и
          структуры данных
        </Paragraph>
      </Chapter>
    </Box>
  );
};

export default PythonParagraphs;
