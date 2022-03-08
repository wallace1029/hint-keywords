interface HintKeywordsConfig {
    targetLabel?: string;
    customLabel?: string;
    color?: string;
}
declare const hintKeywords: (list: any[], keywords?: string | undefined, config?: HintKeywordsConfig | undefined) => any[];
export default hintKeywords;
