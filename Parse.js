// 语法分析
function parse(tokens){
    let l = tokens.length;
    let token;
    let out = ''
    for (let i = 0; i < l; i++) {
        token = tokens[i];

        switch (token.type) {
            case 'space': {
                continue;
            }
            case 'heading': {
                out += heading(token.text,token.level)
                continue;
            }
            default: {
               console.log('other',token)
            }
        }
    }
    return out
}
function heading(text, level) {
    return '<h' + level + '>' + text + '</h' + level + '>\n';
}

export {parse}
