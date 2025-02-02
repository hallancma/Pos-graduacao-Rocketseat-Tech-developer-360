let user: { name: string; age: number; email: string; urlAvatar?: string } = {
  name: "Hallan",
  age: 39,
  email: "hallan@email.com",
  urlAvatar: "www.google.com",
}
console.log(user.name)

function signIn({ email, password }: { email: string; password: string }) {
  console.log(`Usuário: ${email} conectado!`)
}
signIn({ email: "teste@gmail.com", password: "123456" })
