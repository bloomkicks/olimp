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

type Variable = {
  name: string;
  description: string;
};

export type DataFormats = {
  in: Variable[];
  out: Variable[];
};

type ExerciseProps = {
  heading: string;
  title: string;
  description: string;
  dataFormats: DataFormats;
  tests: Tests;
};

export default ExerciseProps;
