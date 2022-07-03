//ts內建的泛型

//1.Array泛型使用
const strArr:Array<string> = ["哈哈","dfdfdf"]
strArr[0].split("")  //可以使用string的方法

//2.promise的泛型使用
const promiseStr:Promise<String> = new Promise((res,rej)=>{
    setTimeout(()=>{
        res('This is a String')
    },1000)
})

//使用.then時會自動判斷回傳的res是string型態
promiseStr.then((res)=>{
    res.split("") //所以可以使用string方法
})