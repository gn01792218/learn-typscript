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
console.log(calculate(1,2,'乘'))   //error TS2345: Argument of type '"乘"' is not assignable to parameter of type '"+" | "-" | "*" | "/"'.