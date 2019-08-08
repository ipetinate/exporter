export default class DownloadFile {
  constructor(content, filename) {
    this.content = content
    this.filename = filename
  }

  download() {
    let element = document.createElement('a')

    element.setAttribute('href', this.content)
    element.setAttribute('download', this.filename)
    element.setAttribute('target', '_blank')

    element.style.display = 'none'
    document.body.appendChild(element)

    element.click()

    document.body.removeChild(element)

    this.logs(this.filename)
  }

  logs(filename) {
    let paragraph = document.createElement('p')
    
    const options = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }

    let date = new Date()
    let dateTime = date.toLocaleDateString('pt-BR', options)

    let log = `Arquivo: ${filename} | Horário: ${dateTime}`

    paragraph.innerHTML = log
  }
}
