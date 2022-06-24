//元組的型別推斷較為薄弱
//會推斷成Union Types
//因此使用元組的話，請重新宣告元組型態!!如arr2
let arr1 =[1,'string']
arr1[0] = "輸入字串也可以，因為是number | string"
arr1[1] = 5
arr1 = [1,2,3,'1111']   //也可以改變長度


//1.使用元組時請宣告型態
//才能發揮元組的檢查機制唷!!!
//以下限制arr2只能有兩個項目，並且第一個一定要是number，第二個一定要是string
let arr2 : [number,string] =[1,'string']  

//2.元組的型別檢查機制
arr2[0] = "dfdfdfdf"  //類型'string'不可指派給類型'number'
arr2[1] = 5           //類型number不可指派給string

//3.對元組的重新賦值
arr2 = [2,'ddd']        //可以重新賦值，只要數量對、型態對
arr2 = []            //數量不對
arr2 = ['string',5] //型態不對

//***注意 : 元組使用push將破功****/
arr2.push(5)
console.log(arr2) //[ 1, 'string' , 5]


//***物件中有元組時，也必須要為了元組，全部重新宣告唷!***
const person :{
    name:string;
    age:number;
    role:[number,string]
}
 = {
    name : "Json",
    age : 25,
    role : [5,"teacher"]
}

