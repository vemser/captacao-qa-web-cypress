export default () => {
  const hoje = new Date()

  let dia = hoje.getDate() + 1
  let mes = hoje.getMonth() + 1
  const anoAtual = hoje.getFullYear()
  
  dia = dia < 10 ? '0' + dia : dia
  mes = mes < 10 ? '0' + mes : mes

  return `${anoAtual}-${mes}-${dia}`
}