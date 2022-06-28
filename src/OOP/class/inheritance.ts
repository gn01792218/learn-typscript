class Creature{
    //name使用protected可以讓繼承的類別使用
    constructor(private readonly id:string,protected name:string){}
    printName(){
        console.log(this.name)
    }
    makeNoise(){
        console.log('Print Creatures sound')
    }
}
class Dog extends Creature{
    private readonly sounds:string = 'woof~!'
    constructor(id:string,name:string){super(id,name)}

    //@overriding methods
    makeNoise(){
        console.log(this.sounds)
    }

    //修改名稱
    //因為在Creature中，name是protected，所以可以直接取用
    changeMyName(newName:string){
        this.name = newName
    }
}
class Cat extends Creature{
    private readonly sounds:string = 'meow~!!'
    constructor(id:string,name:string){super(id,name)}

    //@overriding methods
    makeNoise(){
        console.log(this.sounds)
    }
}

const dog1 = new Dog('1','Kiki')
dog1.printName()
dog1.makeNoise()
dog1.changeMyName('kawa') //狗狗可以自己改名字
dog1.printName()

const cat1 = new Cat('1','orenge')
cat1.printName()
cat1.makeNoise()

const creature1 = new Creature('1','alien')
creature1.printName()
creature1.makeNoise()