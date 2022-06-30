//inter和class的結合
//最主要目的就是，統一規格
//例如下面這個Greetable，統一了規格。任何想實現Greetable功能的class就必須有name和greet。
interface Greetable {
    name:string,
    greet:(str:string)=>void
}
//任何想實現Attackable功能的class就必須有name和attack。
interface Attackable {
    name:string,
    attack:(target:Person2)=>void
}
class Person2 implements Greetable,Attackable{
   //實做介面的屬性一定只能是public
   constructor(public name:string){}
   greet(str: string){
    console.log(`${name}Say : ${str}`)
   }
   attack(target: Person2){
    //攻擊target
    target
   }
}

//基本使用
let hero3 = new Person2('John')
hero3.attack(hero3) //可以攻擊
hero3.greet('HI~~') //也可以打招呼

//使用介面來限制類別擁有的能力
let badMan:Attackable  //這個人具有攻擊性
badMan = new Person2('Nic')
badMan.attack(hero3)  //他只能使用attack方法

let goodMan:Greetable //這個人可以打招呼
goodMan = new Person2('Abie')
goodMan.greet('HI~Iam friendly')  //他只能使用打招呼方法



//和abstract class的不同在於 : 
//1.一個類可以implements多個interface，
//2.介面內的內容全部都必須要被實作，但abstract class只需要實作abstract屬性和方法即可。
//注意 : interface的屬性和方法，不能使用private修飾唷!!!