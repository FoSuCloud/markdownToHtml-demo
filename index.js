import {lex} from './Lexer.js'
import {parse} from "./Parse.js";

function Mark(code){
    let tokens =  lex(code)
    return parse(tokens);
}
export {Mark}
