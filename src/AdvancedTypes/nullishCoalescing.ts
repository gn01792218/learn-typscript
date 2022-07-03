//空值合併運算符號
//只會將null或undefined視為預設值
const userInput1 = null;
//使用空值運算符號??，如果userInput1為null或undefined，才使用預設值DEFAULT
const storedData = userInput1 ?? "DEFAULT";

//使用||判斷的話，當userinput1為""或0也會視為沒有值，而使用DEFAULT
const storedData2 = userInput1 || "DEFAULT";

console.log(`input值 : ${userInput1} 。空值合併運算結果 : ${storedData} ；or運算結果 : ${storedData2}`)


//關於可選串鏈(?) 和 空值合併運算符號 (??) 可以參考這篇筆記
//https://acute-phone-e4f.notion.site/null-undefined-acde325d1f52428abf762b217b000d88