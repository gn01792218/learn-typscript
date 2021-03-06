//限制泛型的型態
//使用extends來限制泛型的型態
//1.以下限制了兩個參數的泛型都是必須要繼承於object才可以傳入

function mergeObj<T extends object,U extends object>(objA:T,objB:U){
    return Object.assign(objA,objB)
}
// const mbj = mergeObj({name:"JJ"},5) //假如沒有限制的話，沒有傳入object也可以，但這樣我們的合併Object就沒有效果了!
const mbj = mergeObj({name:"JJ"},{age:5})


//2.限制泛型，一定要有length這個屬性 (例如string和Array)
interface Lengthy{
    length:number,
}
function countAndDescribe<T extends Lengthy>(element:T):[T,string]{
    let description = 'Got no value!'
    if( element.length > 0 ){
        description = `Got ${element.length} elements.`
    }
    return [element,description]
}

//使用時只能輸入具有length屬性的東西
console.log(countAndDescribe('This is a string')) //[ 'This is a string', 'Got 16 elements.' ]

console.log(countAndDescribe([1,2,3]))  //[ [ 1, 2, 3 ], 'Got 3 elements.' ]

//3.限制泛型只能是物件中有的屬性key
//以下這個方法，可以輸入key從物件中返回值
//正常情況下我們無法知道該key值是否存在於該obj中，
//因此限制key的型態為keyof T ，
//就可以確保key的型態一定是T裡面有的屬性值
function extractAndConvert<T extends object,U extends keyof T>(obj:T,key:U){
    return obj[key]
}

extractAndConvert({name:'JJ',age:25},'name')  //JJ
extractAndConvert({name:'JJ',age:25},'age')  //25
// extractAndConvert({name:'JJ',age:25},'salary')  //報錯，類型 '"salary"' 的引數不可指派給類型 '"name" | "age"' 的參數