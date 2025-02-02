interface IBook {
  title: string;
  pages: number;
  author: string;
}

const book: Pick<IBook, "title"> = {
  title: "Clean Code",
};

const book2: Pick<IBook, "title" | "pages"> = {
  title: "Clean Code",
  pages: 500,
};
