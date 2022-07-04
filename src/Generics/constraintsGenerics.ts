//限制泛型的型態
//使用extends來限制泛型的型態
//以下限制了兩個參數的泛型都是必須要繼承於object才可以傳入

function mergeObj<T extends object,U extends object>(objA:T,objB:U){
    return Object.assign(objA,objB)
}
// const mbj = mergeObj({name:"JJ"},5) //假如沒有限制的話，沒有傳入object也可以，但這樣我們的合併Object就沒有效果了!
const mbj = mergeObj({name:"JJ"},{age:5})