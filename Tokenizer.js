// 分词器
class Tokenizer{
    space(src) {
        // 例如   \n 也就是换行之前有1-多个空格
        const cap = block.newline.exec(src);
        if (cap) {
            if (cap[0].length > 1) {
                return {
                    type: 'space',
                    raw: cap[0]
                };
            }
            return { raw: '\n' };
        }
    }
    heading(src) {
        // 判断是否具有1-6个#；然后匹配结束的位置（空白符或者代码已结束）
        const cap = block.heading.exec(src);
        /**
         0: "## 1 Markdown Nice 简介\n"
         1: "##"
         2: " 1 Markdown Nice 简介"
         * */
        if (cap) {
            let text = cap[2].trim();
            return {
                type: 'heading',
                raw: cap[0], // 匹配到的全部字符串
                level: cap[1].length, // 匹配到的#符号
                text: text, // 匹配到的文本
            };
        }
    }
}

const block = {
    newline: /^(?: *(?:\n|$))+/,
    heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/
};

const tokenizer = new Tokenizer()
export {tokenizer}
