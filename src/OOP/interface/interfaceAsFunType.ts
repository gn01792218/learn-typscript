//用interface來定義一個匿名函式 (正常來說用type來定義比較簡短，這裡只是展示也可以用interface定義)
//相當於使用type來定義
// type Add = (n1:number,n2:number)=>number
interface Add {
    (n1:number,n2:number):number
}

const addFunction :Add = (n1:number,n2:number)=>n1+n2