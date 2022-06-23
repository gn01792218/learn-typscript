//這種型態的宣告方式使用時機為 : 想要更彈性、有需要在runtime時檢查型別時才使用
//這個fun接受兩個參數，且可以是number或string
function combine(input1:number | string ,input2: number | string):number |string{
    //在runtime時期再檢查是number還是string
    if(typeof input1 === 'number' && typeof input2 === 'number'){
        //是number，連接數字
        return input1+input2
    }else{
        //是string時，串接字
        return `${input1}${input2}`
    }
}
console.log(combine(1,2))  //3
console.log(combine('1','2'))  //12
console.log(combine(1,'2'))  //12