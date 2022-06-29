
interface Color{
    color:string,
}
interface Size{
    width:number,
    height:number
}

//interface可以繼承另一個interface
//並且可以繼承多個interface
interface Style extends Color,Size{
   type:string,
}

class Box implements Style{
    color:string = 'red'
    width:number = 100
    height:number = 50
    type:string = 'solid'
}

//注意 : implments介面的屬性，都必須要是public的唷!使用時要小心