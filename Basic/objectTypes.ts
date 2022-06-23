//Object type
//宣告
//宣告的時候用逗號或分號區隔開都可以唷
//***正常情況下不需要這樣寫，因為typscript有inference(型別推斷)機制，自己再寫一次其實是覆蓋**

// const person:{name:string;age:number} = {
//     name:'Json',
//     age:15
// }

//object自動推斷型別，以下這個寫法相當於上面的寫法
const person = {
    name:'Json',
    age:15
}
//所以妳不能給她指定別的屬性
console.log(person.school)