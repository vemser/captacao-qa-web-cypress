import faker from '@faker-js/faker'

const temNeurodivesidade = Math.round(Math.random())

const data = faker.date.between(new Date("01-01-1970"), new Date("01-01-2000"))
let dia = data.getDate()
let mes = data.getMonth()
const ano = data.getFullYear()

dia = dia < 10 ? '0' + dia : dia
mes = mes < 10 ? '0' + mes : mes

mes = mes === '00' ? '01' : mes

export default {
  nome: `${faker.name.firstName()} ${faker.name.lastName()}`,
  email: faker.internet.email(),
  rg: faker.random.numeric(10),
  cpf: "30360155073",
  telefone: faker.phone.phoneNumber("(##) # ####-####"),
  dataNascimento: `${ano}-${mes}-${dia}`,
  cidade: faker.address.city(),
  estado: Math.floor(Math.random() * 27),
  possuiNeurodiversidade:temNeurodivesidade,
  neurodiversidade: "Alguma neurodiversidade"
}


// pessoaValida.setEstudanteTecnicoSuperior(true); //Deve ser defino para false em cenarios negativos
// pessoaValida.setTurnoDeEstudoIndex(faker.number().numberBetween(0, 3));
// pessoaValida.setInstituicao("Inst " + getRandomName());
// pessoaValida.setCurso("Curso " + getRandomName());
// pessoaValida.setNivelInglesIndex(faker.number().numberBetween(0, 5));
// pessoaValida.setNivelEspanholIndex(faker.number().numberBetween(0, 5));
// pessoaValida.setOrientacaoSexualIndex(faker.number().numberBetween(0, 5));
// pessoaValida.setGeneroIndex(faker.number().numberBetween(0, 7));
// pessoaValida.setLinguagensInteresseIndex(getRandomListInteger(0, 10, 3));
// pessoaValida.setTrilhasInteresseIndex(getRandomListInteger(0, 3, 2));
// pessoaValida.setComDeficiencia(getRandomBoolean());
// pessoaValida.setDeficienciaDescricao(pessoaValida.isComDeficiencia() ? "Def " + getRandomName() : "");
// pessoaValida.setMotivoDeInteresse(faker.text().text());
// pessoaValida.setEnsinamentoImportante(faker.text().text());
// pessoaValida.setConhecimentoTecnico(getRandomBoolean());
// pessoaValida.setDisponibilidadeParaTrabalho(getRandomBoolean());
// pessoaValida.setDisponibildiadeParaEstudo(getRandomBoolean());
// pessoaValida.setLinkGitHub("https://github.com/");
// pessoaValida.setLinkLinkedIn("https://www.linkedin.com/");
// pessoaValida.setLinkCurriculo("");
// pessoaValida.setLinkConfiguracoesDoPc("");
// pessoaValida.setAceiteTermos(true);