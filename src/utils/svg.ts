export function getSVGCode(id: string) {
  const svgElement = document.getElementById(id)
  if (svgElement instanceof SVGElement) {
    const svgCode = new XMLSerializer().serializeToString(svgElement)
    return svgCode
  }
  return ''
}

export function downloadSVG(id: string, name: string) {
  const svgCode = getSVGCode(id)
  // 创建 Blob 对象
  const blob = new Blob([svgCode], { type: 'image/svg+xml' })
  const downloadLink = document.createElement('a')
  downloadLink.href = URL.createObjectURL(blob)
  downloadLink.download = name
  downloadLink.click()

  // 释放 Blob 对象资源
  URL.revokeObjectURL(downloadLink.href)
}
