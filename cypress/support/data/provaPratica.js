import faker from '@faker-js/faker'


export default (numeroDeExemplos) => {
  const dificuldadeAleatoria = Math.round(Math.random() * 2)
  let data = {}
  let dificuldade;

  switch (dificuldadeAleatoria) {
    case 0:
      dificuldade = "Fácil"
      break;
    case 1:
      dificuldade = "Médio"
      break
    case 2: 
      dificuldade = "Difícil"
  }
  
  for (let i = 0; i < numeroDeExemplos; i += 1) {
    const exemplo = {
      [`entrada-${i}`]: faker.random.alphaNumeric(100),
      [`saida-${i}`]: faker.random.alphaNumeric(100),
      [`explicacaoEntrada-${i}`]: faker.random.alphaNumeric(100),
      [`explicacaoSaida-${i}`]: faker.random.alphaNumeric(100),
    }

    data = { ...data, ...exemplo }
  }

  return {
    titulo: faker.random.alphaNumeric(100),
    enunciado: faker.random.alphaNumeric(100),
    dificuldade,
    ...data,
  }
}