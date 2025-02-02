interface IUser {
  id: number;
  name: string;
  email: string;
}

const newUser: IUser = { id: 1, name: "Hallan", email: "hallan@gmail.com" };

const updatedUser: Partial<IUser> = { name: "Hallan Christian" };
