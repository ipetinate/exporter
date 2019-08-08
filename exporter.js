function criarArquivo(dados, separador) {
  var csv = dados.map(e => e.join(separador)).join('\n')

  var csvBlob = new Blob([csv], { type: "text/csv;charset=utf-8;" })

  var dataAtual = new Date()
  var nome = 'NomeDoArquivo'
  var options = { hour: '2-digit', minute: '2-digit', second: '2-digit' }

  var nomeArquivo = `${nome}_${dataAtual.toLocaleDateString('pt-BR', options).replace(/\//g, '_').replace(' ', '_')}.csv`

  return download(nomeArquivo, URL.createObjectURL(csvBlob));
}

function download(nomeArquivo, conteudo) {
  var element = document.createElement('a');

  element.setAttribute('href', conteudo);
  element.setAttribute('download', nomeArquivo);
  element.setAttribute('target', '_blank');

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

export default {
  criarArquivo
}