//泛型函式的定義方法
//<>泛型符號不一定只能寫T或是只有一個字；可以自己隨意命名且大小寫皆可
//但通常我們如果只有一個參數會使用T；若有第二個參數則會使用U；若有第三個則會使用V...依此類推
function merge<T,U>(objA:T,objB:U){
    return Object.assign(objA,objB)  //assign方法可以合併兩個物件
}


//可ts在runtime時動態推斷型態
const mergObj1 = merge({name:'Json'},{age:25})
console.log(mergObj1.age)