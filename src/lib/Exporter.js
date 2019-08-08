import DownloadFile from './DownloadFile'

let downloadFile = new DownloadFile()

export default class Exporter {
  constructor(data, filename, type, separator) {
    this.data = data
    this.filename = filename
    this.type = type
    this.separator = separator
  }

  makeCsvFile() {
    var csv = this.data.map(e => e.join(this.separator)).join('\n')
    
    var csvBlob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })

    var dataAtual = new Date()
    var nome = 'NomeDoArquivo'
    var options = { hour: '2-digit', minute: '2-digit', second: '2-digit' }

    var nomeArquivo = `${nome}_${dataAtual.toLocaleDateString('pt-BR', options).replace(/\//g, '_').replace(' ', '_')}.csv`

    return downloadFile.download(nomeArquivo, URL.createObjectURL(csvBlob))
  }
}
