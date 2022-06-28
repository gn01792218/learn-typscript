//static就是不需要創建instance就已經存在的東西

class School{
    static studentList:string[] = []
    constructor(private name:string){
        //ps.如果想要在建構子中取得靜態屬性或方法，
        //不能使用this.
        //一定要使用類別名稱. (School.studentList)
    }
    test(){}
    //創建學生的靜態方法
    static registerStudent(name:string){
        this.studentList.push(name)
    }
}

School.registerStudent('王曉明')
console.log(School.studentList)