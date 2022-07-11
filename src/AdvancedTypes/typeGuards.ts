//型態守衛是用來在runtime的時候，幫你檢查你要使用的屬性或方法，是否確實存在

//1.使用typof : 只適用於基本類別 ( string、number等js原生型別 ) ； 無法使用於自訂義type!
type StrorNum  = string | number;
function addInput (n1:StrorNum,n2:StrorNum){
    if(typeof n1 === 'number' && typeof n2==='number'){
        return n1+n2
    }else{
        return `${n1}+${n2}`
    }
}
//2.使用 in : 一體適用
type SudoUser = {
    name:string,
    privileges:string[],
}
type NormalUser = {
    name:string,
    loginDate:Date
}
type AnyUser = SudoUser | NormalUser

function printUserInfo(user:AnyUser){
    console.log(user.name)
    if('privileges' in user) console.log(user.privileges)
    if('loginDate' in user) console.log(user.loginDate)
}

printUserInfo({name:'John',loginDate:new Date()}) //自動判別為NormalUser

const user11:SudoUser = {name:"JJ",privileges:["Create Serve","Assest Serve"]}
printUserInfo(user11) //輸出姓名和privileges

//3.使用instance of : class限定
class Car {
    drive(){
        console.log("Driving...")
    }
}
class Truck {
    drive(){
        console.log("Driving...")
    }
    loadCargo(amount:number){
        console.log("Loading Cargo : ", amount)
    }
}

type Vehicle = Car | Truck

const v1 = new Car()
const v2 = new Truck()

function useVehicle(v:Vehicle,amount?:number){
    v.drive()
    if(v instanceof Truck && amount){
        v.loadCargo(amount)
    }
}

useVehicle(v1)
useVehicle(v2,500)

//4.使用literal type來做守衛 : 最安全又方便!但只適用於 Object
interface Bird {
    type:'BIRD',
    flyingspeed:number
}
interface Horse {
    type:'HORSE',
    runningspeed:number
}

type AnyAnimal = Bird | Horse;

function printMoveSpeed(a:AnyAnimal){
    let speed;
    switch(a.type){
        case 'BIRD':
            speed = a.flyingspeed
            break
        case 'HORSE':
            speed = a.runningspeed
            break
    }
    console.log(`${a.type}speed : ${speed}`)
}
const h1:Horse = {
    type:'HORSE',
    runningspeed:500
}
printMoveSpeed(h1)