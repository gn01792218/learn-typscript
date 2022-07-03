//以下這些都是literal type
//會將該字面當作是型態
//間接的將它們變成const，無法改變的值
let st:'ddd' = 'ddd'
let num:2 = 2

// st = 'string' //不行，只能是字串形式的'ddd'
// num = 3  //不行，只能是number型態的2


//****搭配union type使用，可以有enum的效果唷!****
function calculate(num1:number,num2:number,methods:'+'|'-'|'*'|'/'):number{
    switch(methods){
        case '+':
            return num1+num2
        case '-':
            return num1-num2
        case '*':
            return num1*num2
        case '/':
            return num1/num2      
    }
}
console.log(calculate(1,2,'*')) 
// console.log(calculate(1,2,'乘'))   //error TS2345: Argument of type '"乘"' is not assignable to parameter of type '"+" | "-" | "*" | "/"'.


//進階使用 : 動態 literal types
//1.基本使用
type World = "word"
type Greeting = `hello ${World}`

//2.和union type 一起使用
type EmailLocaleIDs = "welcome_email" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";
 
type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`; //type AllLocaleIDs = "welcome_email_id" | "email_heading_id" | "footer_title_id" | "footer_sendoff_id"

//3.承上，多個union type一起使用
type Lang = "en" | "ja" | "pt";
 
type LocaleMessageIDs = `${Lang}_${AllLocaleIDs}`;
// type LocaleMessageIDs = "en_welcome_email_id" | "en_email_heading_id" | "en_footer_title_id" | "en_footer_sendoff_id" | "ja_welcome_email_id" | "ja_email_heading_id" | "ja_footer_title_id" | "ja_footer_sendoff_id" | "pt_welcome_email_id" | "pt_email_heading_id" | "pt_footer_title_id" | "pt_footer_sendoff_id"

//詳細請參考官網
// https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html