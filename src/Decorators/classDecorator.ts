//Decorator
//注意 : 要啟用Decorator請將ts設定檔的 experimentalDecorators 設為tue
//注意 : Decorator會在看到class宣告時，就先執行
//注意 : Decorator命名規則也是開頭大寫

//注意 : 程式執行Decorator的順序是由下往上的!

//class的裝飾器函式結構為(constructor:Function)=>void

//1.用function來創造Decorator
//這個基本方法無法帶入參數
function Logger(constructor:Function){
    console.log('Decorator1 Execute!')
    console.log(constructor)
}
function Logger2(constructor:Function){
    console.log('Decorator2 Execute!')
    console.log(constructor)
}
//用@來表示要使用為Decorator，而不是function
//下面的執行順序是 : 先用Logger2把class包裹起來後返回新的物件；再用Logger包裹起來，再回傳新物件
@Logger
@Logger2
class Person3 {
    name = 'Max'
    constructor(){
        console.log('creating person object...')
    }
}
const p3 = new Person3()

//2.製作Decorator Factories
//基本概念就是製作一個函式回傳一個函式
//好處是這樣就可以傳入參數
function LoggerFactories(logString:string){
    return (constructor:Function)=>{
        console.log(logString)
        console.log(constructor)
    }
}

//使用的時候就得執行這個函式
@LoggerFactories('LOGGING - PERSON')
class Person4{
    name = 'Max'
    constructor(){
        console.log('creating person object...')
    }
}
const p4 = new Person4()

//3.製作一個粗糙的模板裝飾器
function Template(template:string,elemenId:string){
    console.log("Template 執行")
    return (constructor:any)=>{
        // const element = document.getElementById(elemenId)
        const p = new constructor()
        // if(element){
        //     template = template+`<h1>${p.name}</h1>`
        //     element.innerHTML = template
        // }
    }
}
@LoggerFactories('LOGGING - PERSON')
@Template('<h1>New Template</h1>','app')
class Person5{
    name = "Max5"
    constructor(){

    }
}
const p5 = new Person5()