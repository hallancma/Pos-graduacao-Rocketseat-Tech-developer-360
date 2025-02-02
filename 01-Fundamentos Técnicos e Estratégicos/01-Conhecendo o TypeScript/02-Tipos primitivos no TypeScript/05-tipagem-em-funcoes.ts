function sum(a: number, b: number): number {
  const result = a + b
  return result
}
console.log(sum(40, 50))

const showMessage = (name: string): string => {
  const message = `Olá ${name}`
  return message
}

console.log(showMessage("Hallan"))
