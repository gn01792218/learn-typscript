//客製化type的用法
//Type aliases(別名) can be used to "create" your own types.


//1.客製化type基本使用
type myType = 1 | 2 | 3;
let k :myType;
// k = 5  //k只能是1或2或3

//2.製作一個客製化的物件type
type User = { name: string; age: number };
//使用
const u1: User = { name: 'Max', age: 30 }; // this works!

function greet(user: User) {
    console.log('Hi, I am ' + user.name);
  }


//3.物件type也可以用union type定義哦!
type Person = {name:string,age:number} | {role:string,salary:number}

const p1:Person = {
    name:'Json',
    age:15
}
const p2:Person = {
    role:'Teacher',
    salary:15000
}