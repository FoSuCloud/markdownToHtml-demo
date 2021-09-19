import {tokenizer} from './Tokenizer.js'
let tokens = [];
// 词法分析
function lex(src){
    src=src.replace(/\t/g,'   ').replace(/\r\n|\r/g,'\n')
    while(src){
        let token;
        // newline
        if (token = tokenizer.space(src)) {
            src = src.substring(token.raw.length);
            if (token.type) {
                tokens.push(token);
            }
            continue;
        }
        // heading
        if (token = tokenizer.heading(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
        }
        // 一个个扫描，如果失败
        src = src.substring(1)
    }
    return tokens;
}

export {lex}
