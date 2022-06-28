//interface的基本使用 : 
//可以用來描述一個物件應該長什麼樣子
//不像class是一個藍圖，interface只是一個宣告type用
//最明顯的區別就是只能宣告type，不能賦值

interface Person1{
    name:string;
    readonly age:number;  //只能讀取
    hateTarget?:string //仇恨對象，可有可無
    greet:(phrase:string)=>void
    //可有可無的函式
    attack?:(target:string)=>void
}

let user1:Person1
user1 = {
    name:"John",
    age:25,
    greet:(str:string)=>{
        console.log(str)
      }
}
user1.greet('HI~~~')
// user1.age = 30 //因為 'age' 為唯讀屬性，所以無法指派至 'age'。ts(2540)


//***interface和type有何不同呢?
//其實他們都可以做到相同的事情，
//type也可以被implements唷
//但他們也確實也些地方不同，請參考
//https://www.notion.so/Ts-interface-type-d5d02e885b35470ebf54948270d1a46a

