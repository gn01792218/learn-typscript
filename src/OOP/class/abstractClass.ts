//抽象類別
//使用抽象類別是為了要"強制"繼承的類別，實作某些方法或屬性
abstract class Creature1 {
    //type 強制所有仔別都要宣告這個屬性
    //注意 : 抽象屬性，一定只能是public
    abstract type:string
    constructor(private readonly id:string,protected name:string){}
    printName(){
        console.log(this.name,this.type)
    }
    //抽象方法不可以實作，只能給子類實作
    //所以不可以加上{}
    //要標示返回值是什麼
    abstract makeNoise():void
}
class Dog1 extends Creature1{
    readonly type:string = "Dog"
    private readonly sounds:string = 'woof~!'
    
    constructor(id:string,name:string){super(id,name)}

    //實作makeNoise方法
    makeNoise(){
        console.log(this.sounds)
    }
}

const dog2 = new Dog1('2','Kiki')
dog2.makeNoise()
dog2.printName()