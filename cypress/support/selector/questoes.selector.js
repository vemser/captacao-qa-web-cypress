export default {
  btnCriarQuestaoPratica: '#root > div.MuiBox-root.css-k008qs > main > main > div > div.flex.flex-wrap.justify-end.gap-5 > button:nth-child(1) > a',
  inputTituloFiltro: '#root > div.MuiBox-root.css-k008qs > main > main > div > div.flex.flex-row.items-end.justify-center.gap-8.mt-10.mb-9 > div > form > div:nth-child(1) > input',
  selectTipo: '[data-testid="tipo"] + select',
  btnFiltrar: '#root > div.MuiBox-root.css-k008qs > main > main > div > div.flex.flex-row.items-end.justify-center.gap-8.mt-10.mb-9 > div > form > button',
  tabelaQuestoes: '#root > div.MuiBox-root.css-k008qs > main > main > div > div.relative.w-full.overflow-auto > table > tbody',
  btnDeletarQuestao: '[data-testid="deletar-questao-*"]',
  btnConfirmaExclusao: 'div.flex:nth-child(3) > button:nth-child(2)',
  btnEditarQuestao: '[data-testid="editar-questao-*"]'
}

// [data-testid="editar-questao-*"] => ' * ' será substituido pelo id do registro a ser editado.