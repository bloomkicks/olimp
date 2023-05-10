import Box from "@mui/material/Box";
import Span from "../text-content/Span";
import Paragraph from "../text-content/Paragraph";
import SubPara from "../text-content/SubPara";
import CodeSection from "../text-content/CodeSection";
import CodeLine from "../text-content/CodeLine";

const PythonParagraphs = () => {
  return (
    <Box>
      <Paragraph title="ОСНОВНЫЕ УЧЕБНЫЕ РЕСУРСЫ" id="resources">
        <SubPara>
          В интернете существует много различных курсов по изучению языка
          Python, но некоторые из них сосредоточены на ненужных нам темах. Что
          нам нужно для олимпиады - это синтаксис Python, основы
          программирования, знание его библиотек и знакомство с алгортимами и
          структурами данных
        </SubPara>
        <SubPara>
          Для этих целей нам подойдут курсы, перечисленные в статье:{" "}
          <Span type="link" href="this">
            https://www.freecodecamp.org/news/best-python-courses
          </Span>
          , из которых я рекоммендую краш-курс от Гугла, но не бойтесь выбирать
          варианты, удобные лично для вас. Если вас интересуют курсы на русском
          языке, то вам подойдет курс Густокашина:{" "}
          <Span type="link" href="this">
            https://www.coursera.org/learn/python-osnovy-programmirovaniya
          </Span>
        </SubPara>
        <SubPara>
          Независимо от выбранного вами курса, не забудьте, что для олимпиады
          обязательно нужны выше перечисленные темы. А сейчас мы как раз и
          познакомимся с этими темами и языком Python. Не волнуйтесь, если
          что-то не поняли - это случается у всех, и после прохождения выбранных
          курсов, у вас сложится ясная картина
        </SubPara>
      </Paragraph>
      <Paragraph title="1. УСТАНОВКА PYTHON И IDE" id="installation">
        <SubPara>
          Лучший способ учения - практика. Именно поэтому первым делом мы
          скачаем Python и приложение для работы с ним.
        </SubPara>
        <SubPara>
          Python можно установить на компьютер с официального сайта:{" "}
          <Span type="link" href="this">
            https://www.python.org/downloads
          </Span>
        </SubPara>
        <SubPara>
          Существует много разных IDE (Integrated Development Environment) для
          разработки на Python, но новичкам больше подходит VS Code, так как он
          бесплатный и лёгкий, а также для можно скачать расширения, которые вам
          помогут. VS Code можно скачать здесь:{" "}
          <Span type="link" href="this">
            https://code.visualstudio.com/download
          </Span>
        </SubPara>
        <SubPara>
          Также можно работать с Python в консоли (Win + X, выбираем PowerShell
          или Command Line). Основное отличие между работе в IDE и консолью
          помимо удобства и внешнего вида является то, что в IDE мы пишем целую
          программу, состоящую из множества команд. А в консоли мы даем
          компьютеру отдельные команды и сразу получаем ответ:
        </SubPara>
        <CodeSection>
          <CodeLine>
            <Span>10</Span> + <Span>2</Span>
          </CodeLine>
          <CodeLine type="response">12</CodeLine>
        </CodeSection>
      </Paragraph>
      <Paragraph title="2. НАЗНАЧЕНИЕ ПЕРЕМЕННЫХ" id="variables">
        <SubPara>
          Переменные в программировании - тоже самое, что и в математике. Только
          вместо <Span type="var-red">x</Span> или <Span type="var-red">y</Span>
          , мы называем переменную понятнее. Например, если мы хотим хранить имя
          пользователя, мы назовём переменную{" "}
          <Span type="var-blue">user_name</Span>.
        </SubPara>
        <SubPara>
          Чтобы обозначить переменную в Python, надо поставить между названием
          переменной и её значением знак равно:
        </SubPara>
        <CodeSection>
          <CodeLine type="centered">
            <Span>user_name</Span> = <Span>{'"Alex"'}</Span>
          </CodeLine>
        </CodeSection>
        <SubPara>Вроде бы все прямолинейно, но что это за кавычки?</SubPara>
      </Paragraph>
      <Paragraph title="3. БАЗОВЫЕ ТИПЫ ДАННЫХ" id="data-types">
        <SubPara>
          Дело в том, что переменная может принимать разные значения - строки,
          числа, символы и многое другое. Чтобы отличать тип строк от других,
          вокруг них и надо ставить кавычки.
        </SubPara>
        <SubPara>
          В Python есть 5 основных типов данных:
          <Box component="ol" sx={{ pl: 3 }}>
            <li>
              <Span type="highlight">Integers</Span> - целые числа
            </li>
            <li>
              <Span type="highlight">Floating-point numbers</Span> -
              рациональные числа
            </li>
            <li>
              <Span type="highlight">Strings</Span> - строки, текст
            </li>
            <li>
              <Span type="highlight">Boolean</Span> - правда или ложь
            </li>
            <li>
              <Span type="highlight">None</Span> - отсутсвие
            </li>
          </Box>
        </SubPara>
        <CodeSection>
          <CodeLine type="no-console">
            <Span type="variable">integer</Span> = <Span>1</Span>
          </CodeLine>
          <CodeLine type="no-console">
            <Span type="variable">floating_point</Span> = <Span>0.995</Span>
          </CodeLine>
          <CodeLine type="no-console">
            <Span type="variable">string</Span> ={" "}
            <Span>{'"hello, world"'}</Span>
          </CodeLine>
          <CodeLine type="no-console">
            <Span type="variable">boolean</Span> = <Span>True</Span>
          </CodeLine>
          <CodeLine type="no-console">
            <Span type="variable">nothing</Span> = <Span>None</Span>
          </CodeLine>
        </CodeSection>
      </Paragraph>
      <Paragraph title="4. МАТЕМАТИЧЕСКИЕ ОПЕРАТОРЫ" id="arithmetic-operations">
        <SubPara>
          Но что нам делать с этими переменными? Всё что угодно, мы можем их
          складывать, умножать, делить, вычитать, проводидить над ними множество
          разных операций:
        </SubPara>
        <CodeSection>
          <CodeLine>
            <Span type="variable">integer1</Span> = <Span>10</Span>
          </CodeLine>
          <CodeLine>
            <Span type="variable">integer2</Span> = <Span>2</Span>
          </CodeLine>
          <CodeLine>
            <Span type="variable">integer1</Span> +{" "}
            <Span type="variable">integer2</Span>
          </CodeLine>
          <CodeLine type="response">12</CodeLine>
        </CodeSection>
        <SubPara>
          У нас получилось тоже самое, что и при обычном сложении этих чисел:
        </SubPara>
        <CodeSection>
          <CodeLine>
            <Span>10</Span> + <Span>2</Span>
          </CodeLine>
          <CodeLine type="response">12</CodeLine>
        </CodeSection>
        <SubPara>
          Проводить такие операции можно как в математике - с помощью
          математических операторов: <Span type="highlight bold">+</Span> -
          сложение, <Span type="highlight bold">-</Span> - вычитание,{" "}
          <Span type="highlight bold">*</Span> - умножение,{" "}
          <Span type="highlight bold">/</Span> - деление
        </SubPara>
      </Paragraph>
      <Paragraph title="5. ПРОЦЕДУРЫ И ФУНКЦИИ" id="functions">
        <SubPara>
          Начнем с понятия операции. Операция - это простая команда компьютеру.
          Он выполняет команду и, если надо, выдает ответ. Например, операцией
          можно назвать то же самое сложение:
        </SubPara>
        <CodeSection>
          <CodeLine comment="- операция">
            <Span>10</Span> + <Span>2</Span>
          </CodeLine>
          <CodeLine comment="- ответ" type="response">
            12
          </CodeLine>
        </CodeSection>
        <SubPara>
          Чтобы не выписывать каждый раз сложные математические операции, мы
          можем назначить функции, принимающие нужные нам числа как аргументы:
        </SubPara>
        <CodeSection>
          <CodeLine>
            <Span>def</Span> <Span>sum</Span>(<Span>num1</Span>,{" "}
            <Span>num2</Span>):
            <CodeLine type="inner">
              <Span>result</Span> = <Span>num1</Span> + <Span>num2</Span>
            </CodeLine>
            <CodeLine type="inner">
              <Span>return</Span> <Span>result</Span>
            </CodeLine>
          </CodeLine>
          <CodeLine>
            <Span>sum</Span>(<Span>10</Span>, <Span>2</Span>)
          </CodeLine>
          <CodeLine type="response">12</CodeLine>
        </CodeSection>
        <SubPara>
          Кодовое слово <Span type="keyword">return</Span> возвращает из функции
          нужное нам значение - <Span type="result">result</Span>. Мы можем
          присвоить его к переменной и использовать дальше в программе:
        </SubPara>
        <CodeSection>
          <CodeLine>
            <Span>result</Span> = <Span>sum</Span>(<Span>10</Span>,{" "}
            <Span>2</Span>)
          </CodeLine>
          <CodeLine>
            <Span>print</Span>(<Span>result</Span>)
          </CodeLine>
          <CodeLine type="response">12</CodeLine>
        </CodeSection>
        <SubPara>
          Если же нам надо просто выполнить какие-нибудь операции без
          возвращения результатов, то таким же образом мы можем назначить
          процедуру. Она отличается от функции только отсутствием кодового слова
          return. В Питоне принято писать в таком случае слово pass:
        </SubPara>
        <CodeSection>
          <CodeLine>
            <Span>def</Span> <Span>yell</Span>(<Span>str</Span>):
            <CodeLine type="inner">
              <Span>result</Span> = <Span>str</Span>.<Span>upper</Span>()
            </CodeLine>
            <CodeLine type="inner">
              <Span>print</Span>(<Span>result</Span>){" "}
            </CodeLine>
            <CodeLine type="inner">
              <Span>pass</Span>
            </CodeLine>
          </CodeLine>
          <CodeLine>
            <Span>yell</Span>(<Span>“привет”</Span>)
          </CodeLine>
          <CodeLine type="print" comment="- сообщение в консоли">
            ПРИВЕТ
          </CodeLine>
          <CodeLine type="response" comment="- ничего не возвратило">
            None
          </CodeLine>
        </CodeSection>
      </Paragraph>
      <Paragraph title="6. ОПЕРАТОРЫ УСЛОВИЯ" id="conditions">
        <SubPara>
          Чтобы воплощать в программе более сложную логику нам нужны операторы
          условия. Например, если нам нужно проверить возраст пользователя и
          предоставить доступ к ресурсу если ему 18 лет или больше:
        </SubPara>
        <CodeSection>
          <CodeLine>
            <Span>if</Span> <Span>age</Span> {">="} <Span>18</Span>:
            <CodeLine type="inner">
              <Span>access</Span> = <Span>True</Span>
            </CodeLine>
          </CodeLine>
        </CodeSection>
        <SubPara>
          Чтобы воплотить эту логику, нужно поставить перед условием (возраст 18
          лет или больше) кодовое слово if. Равно или больше обозначается знаком{" "}
          {">="}. Такие знаки схожи с математическими:
        </SubPara>
        <SubPara type="ordered-list">
          <li>
            <Span type="highlight bold">{"=="}</Span> - равно
          </li>
          <li>
            <Span type="highlight bold">{">"}</Span> - больше
          </li>
          <li>
            <Span type="highlight bold">{"<"}</Span> - меньше
          </li>
          <li>
            <Span type="highlight bold">{">="}</Span> - больше или равно
          </li>
          <li>
            <Span type="highlight bold">{"<="}</Span> - меньше или равно
          </li>
          <li>
            <Span type="highlight bold">{"!="}</Span> - не равно
          </li>
        </SubPara>
        <SubPara>
          Существуют также кодовые слова else и elif, для того, чтобы выполнить
          команду если начальное условие не выполняется:
        </SubPara>
        <CodeSection>
          <CodeLine>
            <Span>if</Span> <Span>age</Span> {">="} <Span>18</Span>:
            <CodeLine type="inner">
              <Span>access</Span> = <Span>True</Span>
            </CodeLine>
          </CodeLine>
          <CodeLine>
            <Span>else</Span>:
            <CodeLine type="inner">
              <Span>access</Span> = <Span>False</Span>
            </CodeLine>
          </CodeLine>
        </CodeSection>
        <SubPara>
          Однако в нашем конкретном случае намного проще сразу присвоить
          значение условия переменной access, так как условия - тоже процедуры,
          возвращающие значение True или False:
        </SubPara>
        <CodeSection>
          <CodeLine type="centered">
            <Span>access</Span> = <Span>age</Span> {">="} <Span>18</Span>
          </CodeLine>
        </CodeSection>
      </Paragraph>
      <Paragraph title="7. ОПЕРАТОРЫ ЦИКЛА" id="cycles">
        <SubPara>
          Также в любом языке программирования нам нужны операторы цикла. Они
          отвечают за случаи, когда нам надо повторять операцию множество раз.
        </SubPara>
        <SubPara>
          Например, если мы хотим досчитать до 100, нам нужно добавлять к
          начальному числу по единице, пока оно не станет ровно 100:
        </SubPara>
        <CodeSection>
          <CodeLine>
            <Span>while</Span> <Span>num</Span> {"<="} <Span>100</Span>:
            <CodeLine type="inner">
              <Span>num</Span> = <Span>num</Span> + <Span>1</Span>
            </CodeLine>
            <CodeLine type="inner">
              <Span>print</Span>(<Span>num</Span>)
            </CodeLine>
          </CodeLine>
          <CodeLine type="response">1</CodeLine>
          <CodeLine type="response">2</CodeLine>
          <CodeLine type="response">...</CodeLine>
          <CodeLine type="response">100</CodeLine>
        </CodeSection>
        <SubPara>
          Для использования цикла в Python, надо использовать кодовые слова:{" "}
          <Span type="keyword">while</Span>,{" "}
          <Span type="keyword">do ... while</Span>,{" "}
          <Span type="keyword">for</Span>. Цикл{" "}
          <Span type="keyword">while</Span> выполняется пока правдиво условие
          стоящее после него (num {"<="} 100). Цикл
          <Span type="keyword">do ... while</Span> отличается от предыдущего
          только тем, что если его условие не выполняется, он все равно выполнит
          операцию один раз.
        </SubPara>
        <SubPara>
          Цикл for выполняется определённое количество раз. Это количество мы
          передаем с встроенной функцией range:
        </SubPara>
        <CodeSection>
          <CodeLine>
            <Span>for</Span> <Span>num</Span> <Span>in</Span> <Span>range</Span>
            (<Span>100</Span>):{" "}
            <CodeLine type="inner">
              <Span>print</Span>(<Span>num</Span>)
            </CodeLine>
          </CodeLine>
          <CodeLine type="response">1</CodeLine>
          <CodeLine type="response">2</CodeLine>
          <CodeLine type="response">...</CodeLine>
          <CodeLine type="response">100</CodeLine>
        </CodeSection>
      </Paragraph>
      <Paragraph title="8. СИНТАКСИС PYTHON" id="syntax">
        <SubPara>
          Можно заметили, что назначение функций, условий и циклов сходится в
          том, что их содержимое сдвинуто вправо, а после названия функции,
          условия или цикла стоит знак двоеточия (
          <Span type="highlight bold">:</Span>). Если их убрать, то Python
          выдаст ошибку и программа не будет работать:
        </SubPara>
        <CodeSection>
          <CodeLine type="comment"># правильно</CodeLine>
          <CodeLine>
            <Span>def</Span> <Span>say</Span>(<Span>str</Span>):
            <CodeLine type="inner">
              <Span>print</Span>(<Span>str</Span>)
            </CodeLine>
          </CodeLine>
          <CodeLine type="comment"># неправильно</CodeLine>
          <CodeLine>
            <Span>def</Span> <Span>say</Span>(<Span>str</Span>):{" "}
            <CodeLine type="inner">
              <Span>print</Span>(<Span>str</Span>)
            </CodeLine>
          </CodeLine>
        </CodeSection>
        <SubPara>
          Также видно, что для выполнения функции, после ее названия нужно
          поставить круглые скобки, внутри которых при необходимости вставить
          аргументы. А чтобы написать какое-нибудь объяснение, перед ним надо
          поставить хэштег (<Span type="highlight bold">#</Span>), чтобы Python
          не выполнял написаное.
        </SubPara>
        <SubPara>
          Такие детали у каждого языка программирования различаются. Лучший
          способ их запомнить - практиковаться, после недели писания на Python,
          вы научитесь ставить их автоматически.
        </SubPara>
      </Paragraph>
      <Paragraph title="9. ТЕСТИРОВАНИЕ И ДЕБАГ" id="testing">
        <SubPara>
          Тестирование - это процесс проверки программного обеспечения путем его
          выполнения с различными входными данными и наблюдения за выходными.
        </SubPara>
        <SubPara>
          Python предоставляет встроенные библиотеки для помощи в тестировании,
          такие как модуль unittest. Он предоставляет классы и методы, которые
          позволяют легко настраивать тестовые случаи и запускать их.
        </SubPara>
        <SubPara>
          Дебаг является еще одним важным аспектом разработки программного
          обеспечения. Это процесс нахождения и устранения ошибок или багов в
          коде.
        </SubPara>
        <SubPara>
          Python предоставляет различные инструменты для упрощения отладки кода:
        </SubPara>
        <SubPara>
          1. Один из распространенных инструментов использовать операторы print
          для регистрации значения переменных или выходных данных на критических
          точках в программе
        </SubPara>
        <SubPara>
          2. Еще один инструмент - это использование отладочных библиотек, таких
          как pdb или ipdb, которые позволяют приостанавливать выполнение в
          определенных точках и изучать переменные или конкретные компоненты,
          которые, по вашему мнению, могут вызвать проблему.
        </SubPara>
      </Paragraph>
      <Paragraph title="10. БИБЛИОТЕКИ PYTHON" id="libraries">
        <SubPara>
          Python является очень универсальным языком с широким спектром
          стандартных библиотек, доступных для разработчиков. Эти библиотеки
          предоставляют много функциональности, которую можно использовать в
          различных программах. Вот некоторые из наиболее полезных на олимпиаде
          библиотек Python:
        </SubPara>
        <SubPara>
          1. **collections** - Эта библиотека предоставляет дополнительные
          структуры данных, отличные от встроенных. Она включает классы, такие
          как OrderedDict, defaultdict и Counter.
        </SubPara>
        <SubPara>
          2. **math** - Эта библиотека предоставляет математические функции,
          такие как тригонометрические функции, логарифмы и константы, такие как
          pi и e.
        </SubPara>
        <SubPara>
          3. **random** - Эта библиотека предоставляет функции для генерации
          случайных чисел. Она позволяет генерировать случайные целые числа,
          числа с плавающей точкой и случайные выборки из списков.
        </SubPara>
        <SubPara>
          4. **re** - Эта библиотека предоставляет поддержку регулярных
          выражений. Она позволяет искать и заменять шаблоны в строках.
        </SubPara>
        <SubPara>
          Это только некоторые из наиболее популярных стандартных библиотек
          Python. Их существует много других, которые предоставляют
          дополнительную функциональность для работы с базами данных, сетями,
          графикой и многим другим.
        </SubPara>
      </Paragraph>
      <Paragraph title="ЗАКЛЮЧЕНИЕ">
        <SubPara>
          Ну вот и все, на этом пока можно закончить изучение Python. Знание
          этих тем должно хватить для олимпиады, но не стоит останавливаться на
          достигнутом, продолжайте практикаваться и развиваться, ведь от этого
          шансы успеха на олимпиаде только увеличатся
        </SubPara>
      </Paragraph>
    </Box>
  );
};

export default PythonParagraphs;
