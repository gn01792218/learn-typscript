//never通常用在代表函式或方法的回傳值上
//用來表示script crash或函式無法終止
//例如 : 發生error時、無限回圈時
//標示這個型態主要是讓開發者可以一眼看穿這是一個Error函式


//例如這個error function，執行時代表script never return value
function generateError(message:string,code:number):never{   //沒有標示never型別時，ts會自動推斷為void
    throw {message:message,errorCode:code}
}

generateError('There something wrong!!',500)

//never和void的差異
https://acute-phone-e4f.notion.site/ts-type-never-void-Never-Void-e47fd73933e94b25b982e71413c311a2