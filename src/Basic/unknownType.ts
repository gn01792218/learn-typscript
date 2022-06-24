
//unknown和any的不同在於 : 
//unknown ==> 還不知道是什麼型態的型態(runtime時才知道是什麼型態)
//any ==>接受任何型態的型態
let input:unknown;
let userName:string;

input = 5
input = 'Json'
// userName = input  //類型 'unknown' 不可指派給類型 'string'。

//nuknown迫使你必須要在runtime時檢查型別
//1.使用if檢查
if(typeof input==='string'){  //unknown讓你必須在runtime時，檢查是什麼
    userName = input
}
//2.使用as斷言型別
userName = input as string
//3.使用<>斷言
userName = <string>input
