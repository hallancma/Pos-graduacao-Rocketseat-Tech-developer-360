interface IPerson {
  id: number;
  name: string;
  // mail: string;
}

interface ITeacher extends IPerson {
  // id: number;
  // name: string;
  subjects: string[];
}

interface IStudent extends IPerson {
  // id: number;
  // name: string;
  age: number;
}

let teacher: ITeacher = {
  id: 1,
  name: "Hallan",
  subjects: ["javascript", "Matematica"],
};

let student: IStudent = { id: 2, name: "João", age: 18 };
