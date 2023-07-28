// https://yoksel.github.io/url-encoder/

export function getResults(initTextarea: string) {
  const namespaced = addNameSpace(initTextarea)
  const escaped = encodeSVG(namespaced)
  const quotes = getQuotes()

  const resultCss = `background-image: url(${quotes.level1}data:image/svg+xml,${escaped}${quotes.level1});`

  return {
    encoded: escaped, // 转化
    resultCss, // 直接在 CSS 中使用
  }
}

function addNameSpace(data: string) {
  const quotes = getQuotes()

  if (!data.includes('http://www.w3.org/2000/svg'))
    data = data.replace(/<svg/g, `<svg xmlns=${quotes.level2}http://www.w3.org/2000/svg${quotes.level2}`)

  return data
}

function encodeSVG(data: string, externalQuotesValue = 'double') {
  const symbols = /[\r\n%#()<>?[\\\]^`{|}]/g

  if (externalQuotesValue === 'double')
    data = data.replace(/"/g, '\'')
  else
    data = data.replace(/'/g, '"')

  data = data.replace(/>\s{1,}</g, '><')
  data = data.replace(/\s{2,}/g, ' ')

  // Using encodeURIComponent() as replacement function
  // allows to keep result code readable
  return data.replace(symbols, encodeURIComponent)
}

function getQuotes(externalQuotesValue = 'double') {
  const double = '"'
  const single = '\''

  return {
    level1: externalQuotesValue === 'double' ? double : single,
    level2: externalQuotesValue === 'double' ? single : double,
  }
}
