class Department {
    private name:string;
    private employee :string[] = []
    constructor(name:string){
        this.name = name
    }
    //methods方法:
    //可以在參數地方指定this為Department2類型
    //所以將來誰使用print方法，它(this)的屬性就必須和Department2一樣才可以使用
    //換句話說，確保了調用print方法的一定得是Department物件，或是和Department物件具有相同屬性的物件
    print(this:Department){
        console.log(`部門 : ${this.name}`)
    }

    //處理員工的方法
    addEmployee(newEmployee:string){
        this.employee.push(newEmployee)
    }
    printEmployeeInformation(this:Department){
        console.log(this.employee)
    }
}

//創建實體
const accounting = new Department('會計部門')
accounting.print()  //部門 : 會計部門
accounting.addEmployee('Adia')
accounting.printEmployeeInformation()

//print方法被拿出來給account2使用，
const account2 = { print:accounting.print }
// account2.print()  //類型 '{ print: (this: Department2) => void; }' 的 'this' 內容無法指派給方法之類型 'Department2' 的 'this'。
                    //類型 '{ print: (this: Department2) => void; }' 缺少屬性 'name'...略...，但類型 'Department2' 必須有該屬性。ts(2684)

//class的縮寫方法
//原本要這樣寫
// class Animal{
//     private type:string
//     private name:string
//     constructor(type:'dog' | 'cat',name:string){
//         this.type = type
//         this.name = name
//     }
//     printName(this:Animal){
//         console.log(`${this.name}[${this.type}]`)
//     }
// }
//直接在constructor的參數中，加上private或public關鍵字
//就會直接傳入參數，並且產生該變數
class Animal{
    constructor(private type:'dog' | 'cat',private name:string){}
    printName(this:Animal){
                console.log(`${this.name}[${this.type}]`)
    }
}

const dog = new Animal('dog','Json')
dog.printName()

//class的readOnly屬性
//宣告為readOnly的屬性，將只能在初始化時賦值
class Employee {
    constructor(private readonly id:string){}
}
//相當於這樣寫
// class Employee {
//     private readonly id:string
//     constructor(id:string){
//         this.id = id
//     }
// }
const Employee1 = new Employee('1529')