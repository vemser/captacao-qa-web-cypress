export default (anos) => {
  const hoje = new Date()

  let dia = hoje.getDate()
  let mes = hoje.getMonth() + 1
  const anoAtual = hoje.getFullYear()
  
  dia = dia < 10 ? '0' + dia : dia
  mes = mes < 10 ? '0' + mes : mes

  const ano = anoAtual - anos

  return `${ano}-${mes}-${dia}`
}