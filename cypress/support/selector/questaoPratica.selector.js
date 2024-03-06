 export default {
  inputTitulo: '[data-testid="titulo"]',
  inputEnunciado: '[data-testid="enunciado"]',
  selectDificuldade: '[data-testid="dificuldade"] + select',
  btnAdicionarExemplo: '[data-testid="adicionar-exemplo"]',
  inputEntrada: '[data-testid="exemplo-entrada-*"]',
  inputSaida: '[data-testid="exemplo-saida-*"]',
  inputExplicacaoEntrada: '[data-testid="entrada-explicacao-*"]',
  inputExplicacaoSaida: '[data-testid="saida-explicacao-*"]',
  btnCriarQuestao: '[data-testid="criar-questao"]',
  mensagemToast: '#root > div.Toastify > div > div > div > div:nth-child(2)',
  btnVoltar: '#root > div.MuiBox-root.css-k008qs > header > div > button.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1yxmbwk',
  msgErroTitulo: '[data-testid="titulo"] + p',
  msgErroEnunciado: '[data-testid="enunciado"] + p',
  msgErroDificuldade: '[data-testid="dificuldade"] ~ p',
  msgErroEntrada: '[data-testid="exemplo-entrada-*"] + p',
  msgErroSaida: '[data-testid="exemplo-saida-*"] + p',
  msgErroExplicacaoEntrada: '[data-testid="entrada-explicacao-*"] + p',
  msgErroExplicacaoSaida: '[data-testid="saida-explicacao-*"] + p',
  btnEditarQuestao: '[data-testid="editar-questao"]',
}

// [data-testid="exemplo-entrada-*"] => ' * ' será substituido pelo número da entrada, iniciando do 0 até 4.