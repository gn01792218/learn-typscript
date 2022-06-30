//type casting 可以明確告知typescript我們確定這個型態是什麼
//通常用於和dom互動時
//有以下兩種寫法可以斷言型態(並且同時具有告訴typscript not null的效果)

//1.使用as斷言
const userInput = document.getElementById("user-input") as HTMLInputElement
userInput.value = "John"

//2.使用< > 斷言

const userInput2 = <HTMLInputElement>document.getElementById("user-input2")
userInput2.value = "John"

//以上這兩種方式我們在開發時，請統一選擇一種就好!!!