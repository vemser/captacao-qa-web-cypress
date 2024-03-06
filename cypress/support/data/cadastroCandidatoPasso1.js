import faker from '@faker-js/faker'


export default () => {
  const temNeurodivesidade = Math.round(Math.random())
  
  const data = faker.date.between(new Date("01-01-1970").toISOString(), new Date("01-01-2000").toISOString())
  let dia = data.getDate()
  let mes = data.getMonth()
  const ano = data.getFullYear()
  
  dia = dia < 10 ? '0' + dia : dia
  mes = mes < 10 ? '0' + mes : mes
  
  mes = mes === '00' ? '01' : mes
  
  return {
    nome: `${faker.name.firstName()} ${faker.name.lastName()}`,
    email: faker.internet.email(),
    rg: faker.random.numeric(10),
    cpf: "30360155073",
    telefone: faker.phone.phoneNumber("(##) # ####-####"),
    dataNascimento: `${1990}-${mes}-${dia}`,
    cidade: faker.address.city(),
    estado: Math.floor(Math.random() * 27),
    possuiNeurodiversidade:temNeurodivesidade,
    neurodiversidade: "Alguma neurodiversidade"
  }
}