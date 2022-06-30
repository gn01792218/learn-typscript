
//函式多載
//例如我們已知addFun這個方法接受兩個參數，並且可以任意輸入number或是string

//先宣告一個union type
type MixStrNum = string | number

//宣告函式多載
function addFun(a:number,b:number):number;
function addFun(a:string,b:string):string;
function addFun(a:number,b:string):string;
function addFun(a:string,b:number):string;

//實作函示多載
function addFun(a:MixStrNum,b:MixStrNum):MixStrNum{
    if(typeof a ==='string' || typeof b === 'string') return `${a}${b}`
    return a+b
}

//如此一來就可以使用該型態的功能，而不需要依賴斷言!!!
const result = addFun('Mix','Min')
result.split(' ')
