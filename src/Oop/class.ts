class Department {
    name:string;
    constructor(name:string){
        this.name = name
    }
    //methods方法，可以在參數地方指定this為Department2類型
    //所以將來誰使用print方法，它(this)的屬性就必須和Department2一樣才可以使用
    //換句話說，確保了調用print方法的一定得是Department物件，或是和Department物件具有相同屬性的物件
    print(this:Department){
        console.log(`部門 : ${this.name}`)
    }
}

//創建實體
const accounting = new Department('會計部門')
accounting.print()  //部門 : 會計部門

//this的指向
//print方法被拿出來給account2使用，
//但account2沒有name屬性，所以this找不到name屬性，輸出indefined
const account2 = { print:accounting.print }
// account2.print()  //類型 '{ print: (this: Department2) => void; }' 的 'this' 內容無法指派給方法之類型 'Department2' 的 'this'。
                    //類型 '{ print: (this: Department2) => void; }' 缺少屬性 'name'，但類型 'Department2' 必須有該屬性。ts(2684)
//想要使用Department的print方法，
const account5 = { name:'會計部門5',print:accounting.print }
account5.print()  //ok