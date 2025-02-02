//Cria um objeto onde todas aas ccheves são e o valroes são números
const scores: Record<string, number> = {
  Hallan: 95,
  Maria: 88,
  João: 92,
};

//Limitar valores
type TProfile = "admin" | "user" | "guest";

const newUser2: Record<TProfile, number> = {
  admin: 1,
  user: 2,
  guest: 3,
};

//Objetos personalizados
interface IUserNew {
  email: string;
  name: string;
}

const listUsers: Record<number, IUserNew> = {
  1: { email: "hallancma@gmail.com", name: "Hallan" },
  2: { email: "hallancma@gmail.com", name: "Hallan" },
};
