//泛型和Union type的不同之處

function addFunction1<T>(a:T,b:T){
    //方法邏輯...
    //a和b型態，在runtime時都會是一樣的!!!!
}

function addFunction2(a:string | number,b:string | number){
    //a和b都有可能是string或者是number
    //所以總共會有2*2的排列組合
}