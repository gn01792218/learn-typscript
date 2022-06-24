//function的型態叫做Function

//1.宣告一個變數，它的型態是Function
let a:Function;
a=()=>{console.log('Im a fun')}
// a=5 //不給過，因為a只能是function

//2.約束函式型態(限定參數、返回值的型態)
//上面的宣告法沒有督大實質意義，因為任和function都可以接受
//為了進一步確保我們只能assign某種function形式(參數、返回)
//宣告時使用箭頭函式約束
let b:(n1:number,n2:number)=>number //限定函式只能接受兩個number參數，並回傳number
b = function add(n1:number,n2:number){
    return n1+n2
}
// b = function log(st1:string,st2:string){   //不能賦值，因為參數和回傳值都不一樣
//     return st1+st2
// } 


//3.在函式參數中定義callBack function
//定義好不同的函式
//撰寫print方法時，將其中一個參數設計成傳入函式
function print(n1:number,n2:number,methods: (num1: number, num2: number) => number) {
    let result = methods(n1,n2)
    alert(result)
}

//以下兩個都式input2個數字，回傳一個數字
let sun: (num1: number, num2: number) => number = (num1: number, num2: number) => num1+num2
let plus: (num1: number, num2: number) => number = (num1: number, num2: number) => num1 * num2

print(1,2,plus)


//4.使用interface 
interface sunNumber {
	(num1:number,num2:number):number
}

let sum:sunNumber = function(num1:number,num2:number):number{
	return num1+num2
}

//5.只有一個參數的函式
//假如想要在參數方面使用簡寫的話，一定得在前面多一個宣告
const printStr:(input:string | number)=>void = input=>console.log(input)

//否則還是得乖乖寫括號
const printStr2 = (input:string | number)=>console.log(input)

//6.為函式參數設置預設值
const add = (n1:number, n2:number = 10)=> n1+n2
console.log(add(1)) //11
//****注意****
//帶有預設值的參數，只能設置在最右邊
const sum3 = (n1:number=10,n2:number=5,n3:number)=>n1+n2+n3
//假如預設參數的右邊有東西，將會導致預設值無法被自動計算
console.log(sum3(10,10))  //不給過，說未提供n3

//7.其餘運算子 [...] (spread operator)的宣告
function sumMore(...nums:number[]){
    let sum = 0
    nums.forEach(n=>{
        sum+=n
    })
    return sum
}
//使用reduce來寫，更猛
function sumMoreReduce(...nums:number[]){
    return nums.reduce((preValue,currentValue)=>{
        return preValue+currentValue
    },0)
}
//也可以使用元組
function displayTuples(...inputs:[number,string,number]){
    return inputs.reduce((preValue,currentValue)=>{
        return `${preValue}${currentValue}`
    })
}
console.log(displayTuples(1,'加',2)) //1加2
//[...]運算子筆記
//https://www.notion.so/spread-operator-dad77e9513e14086897d78387655407b