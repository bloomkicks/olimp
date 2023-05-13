export type Tests = {
  in: {
    name: string;
    value: string;
  }[];
  out: {
    name?: string;
    value: string;
  };
}[];

type VariableFormat = {
  name: string;
  description: string;
};

export type DataFormats = {
  in: VariableFormat[];
  out: VariableFormat[];
};

type ExerciseProps = {
  heading: string;
  title: string;
  description: string;
  dataFormats: DataFormats;
  tests: Tests;
};

export default ExerciseProps;
