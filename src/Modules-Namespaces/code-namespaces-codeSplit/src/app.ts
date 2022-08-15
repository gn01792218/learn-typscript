//import 分割檔案，使用三條斜線作為開頭"///"
//同樣屬於namespace App的才可以讓ts找的到並成功import唷!
/// <reference path="components/project-input.ts"/>
/// <reference path="components/project-list.ts"/>
namespace App {
  new ProjectInput();
  new ProjectList("active");
  new ProjectList("finished");
}
