//進階的type使用
//交叉類型-->其實和使用interface然後繼承其他interface一樣
type Admin = {  //管理的類型
    name:string,
    privileges:string[] //privileges(特權)
}
type Employee1 = {
    name:string,
    startDate:Date
}
type PersonalData = {
    age:number,
}

//定義一個交叉類型，使用 & 來串聯多個type
//這個類型就必須要有以上所有的屬性
type ElevatedEmployee = Admin & Employee1 & PersonalData;
const e1:ElevatedEmployee ={
    name:'John',
    privileges:['零食飲料','露臺','server管理'],
    startDate:new Date(),
    age:55,
}

//交叉類型遇到聯合類型
//會將類型取交集
type A = string | number
type B = boolean | string

type C = A & B  //型態是string
let temp:C
temp = 'AAAAA'
// temp = 25 //錯，只能是string

//ps.交叉類型也可以接受interface
interface AA {
    name:string
}
interface BB{
    age:number
}
type CC = AA & BB

//以上相當於
// interface AA {
//     name:string
// }
// interface BB{
//     age:number
// }
// interface CC extends AA,BB {}