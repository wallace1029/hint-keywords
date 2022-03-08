const hintKeywords = (list, keywords, config) => {
    const defaultConfig = {
        targetLabel: 'label',
        customLabel: 'customLabel',
        color: 'red'
    };
    Object.assign(defaultConfig, config);
    if (list.length === 0)
        return [];
    if (keywords === '' || keywords === undefined) {
        list.forEach((item) => {
            item[defaultConfig.customLabel] = item[defaultConfig.targetLabel];
        });
        return list;
    }
    list.forEach((item) => {
        const newLabel = item[defaultConfig.targetLabel].toUpperCase();
        const newKeywords = keywords.toUpperCase();
        const index = newLabel.indexOf(newKeywords);
        if (index !== -1) {
            const originKeywords = item[defaultConfig.targetLabel].substring(index, index + keywords.length);
            item[defaultConfig.customLabel] = item[defaultConfig.targetLabel].replace(originKeywords, `<span style="color: ${defaultConfig.color}">${originKeywords}</span>`);
        }
        else {
            item[defaultConfig.customLabel] = item[defaultConfig.targetLabel];
        }
    });
    return list;
};

export { hintKeywords as default };
