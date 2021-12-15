var hintKeywords = function (list, keywords, config) {
  var defaultConfig = {
    targetLabel: 'label',
    customLabel: 'customLabel',
    color: 'red'
  };
  Object.assign(defaultConfig, config);
  if (list.length === 0) return [];

  if (keywords === '' || keywords === undefined) {
    list.forEach(function (item) {
      item[defaultConfig.customLabel] = item[defaultConfig.targetLabel];
    });
    return list;
  }

  list.forEach(function (item) {
    var newLabel = item[defaultConfig.targetLabel].toUpperCase();
    var newKeywords = keywords.toUpperCase();
    var index = newLabel.indexOf(newKeywords);
    var originKeywords = item[defaultConfig.targetLabel].substring(index, index + keywords.length);
    item[defaultConfig.customLabel] = item[defaultConfig.targetLabel].replace(originKeywords, "<span style=\"color: ".concat(defaultConfig.color, "\">").concat(originKeywords, "</span>"));
  });
  return list;
};

export { hintKeywords as default };
