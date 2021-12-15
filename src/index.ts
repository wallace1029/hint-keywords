interface HintKeywordsConfig {
  targetLabel?: string
  customLabel?: string
  color?: string
}

const hintKeywords = (
  list: any[],
  keywords?: string,
  config?: HintKeywordsConfig
) => {
  const defaultConfig = {
    targetLabel: 'label',
    customLabel: 'customLabel',
    color: 'red'
  }
  Object.assign(defaultConfig, config)

  if (list.length === 0) return []

  if (keywords === '' || keywords === undefined) {
    list.forEach((item: any) => {
      item[defaultConfig.customLabel] = item[defaultConfig.targetLabel]
    })
    return list
  }

  list.forEach((item: any) => {
    const newLabel = item[defaultConfig.targetLabel].toUpperCase()
    const newKeywords = keywords.toUpperCase()
    const index = newLabel.indexOf(newKeywords)
    if (index > 0) {
      const originKeywords = item[defaultConfig.targetLabel].substring(
        index,
        index + keywords.length
      )
      item[defaultConfig.customLabel] = item[defaultConfig.targetLabel].replace(
        originKeywords,
        `<span style="color: ${defaultConfig.color}">${originKeywords}</span>`
      )
    } else {
      item[defaultConfig.customLabel] = item[defaultConfig.targetLabel]
    }
  })
  return list
}

export default hintKeywords
