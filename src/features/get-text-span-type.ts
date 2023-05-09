function getTextSpanType(text: string): string {
  let type = "";
  if (
    ["return", "if", "pass", "def", "else", "while", "for", "in"].includes(text)
  ) {
    type = "keyword";
  } else if (
    Number(text).toString() === text ||
    ["True", "False", "None"].includes(text) ||
    text[0] === '"'
  ) {
    type = "value";
  } else if (["sum", "print", "yell", "upper", "range", "say"].includes(text)) {
    type = "function";
  } else if (text[0] === "#") {
    type = "comment";
  } else if (
    [
      "result",
      "user_name",
      "age",
      "access",
      "num",
      "str",
      "num1",
      "num2",
    ].includes(text)
  ) {
    type = "variable";
  }

  return type;
}

export default getTextSpanType;
