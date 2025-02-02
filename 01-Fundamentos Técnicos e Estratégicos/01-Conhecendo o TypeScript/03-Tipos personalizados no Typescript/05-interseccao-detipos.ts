type IPerson = {
  id: number;
  name: string;
};

type ITeacher = IPerson & {
  subject: string[];
};

type IStudent = IPerson & {
  grade: number;
};

let teacher: ITeacher = {
  id: 1,
  name: "Hallan",
  subject: ["Matemática", "Física"],
};

console.log(teacher);

//let student: IStudent;
