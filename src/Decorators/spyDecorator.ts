//製作一個裝飾器spy，
//其有一個 [] 屬性 calls
//每次該函數被呼叫時，就將呼叫時的參數資訊儲存起來

//使用該裝飾器的範例 : 
// function work(a, b) {  // work is an arbitrary function or method
//     alert( a + b ); 
//   }
  
//   work = spy(work);
  
//   work(1, 2); // 3
//   work(4, 5); // 9
  
//   for (let args of work.calls) {
//     alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
// }

//請完成spy裝飾器
//型態隨意(先統一型態即可)
function spy(func:Function) {
    function wrapper(this:any,...args:number[]){
        //1.呼叫時，將參數訊息儲存起來
        wrapper.calls.push(args)
        return func.apply(this,args)
    }
    //初始化wrapper.calls
    wrapper.calls = [] as Array<number[]>
    return wrapper
}

function addNumber(...number:number[]) {
    let sum = 0
    number.forEach(n => sum+=n)
    return 
}

const addWork = spy(addNumber)
addWork(1,2,5,9)
addWork(7,8)

for(let i of addWork.calls){
    console.log(i)
}