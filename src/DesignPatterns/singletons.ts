//單例模式
//確保永遠只有一個instance
class SingleHero{
    private static instance:SingleHero
    private constructor(private name:string){}
    static getInstance(){
        if(SingleHero.instance)return SingleHero.instance
        SingleHero.instance = new SingleHero('Jonney')
        return SingleHero.instance
    }
}
const hero1 = SingleHero.getInstance()
const hero2 = SingleHero.getInstance()

console.log(hero1===hero2)  //true