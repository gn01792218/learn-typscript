//用於創建更具有彈性的type
//可以讓型態的屬性名稱之後再決定


//用 [ ] 來宣告屬性名，只能是string或是number symbol
//用 [ ] 宣告，即使沒有任何一個屬性存在，也沒關係(代表是空陣列)

//給這個type宣告索引屬性，可以彈性擴充此interface的屬性
//所有屬性名都是string，並且內容也是string
//ps.改成interface一樣也可以
type ErrorContainer = {
    [properties:string]:string,
    //也可以預先定義屬性，但一定得符合indexProties的型態
    id:string,
    // id:number,  //只能是string
}

const errorBag:ErrorContainer = {
    id:'12345',
    email:'Not a valid email!',
    username:'Must start with a capital character!'
}