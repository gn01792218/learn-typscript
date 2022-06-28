class People{
    private id :string = '0'
    constructor(private name:string){}
    get peopleName(){
        return this.name
    }
    set peopleName(value:string){
        this.name = value
    }
    get peopleId(){
        return this.name
    }
    set peopleId(value:string){
        this.name = value
    }
}
const people1 = new People('JJ')

//使用getter和setter
people1.peopleName = "BB"
console.log(people1.peopleName)

people1.peopleId = "10"
console.log(people1.peopleId)
