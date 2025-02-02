interface IBook {
  title: string;
  pages: number;
  author: string;
  description: string;
}

const goodBook: Omit<IBook, "description"> = {
  title: "Clean Code",
  pages: 500,
  author: "Robert C. Martin",
};
