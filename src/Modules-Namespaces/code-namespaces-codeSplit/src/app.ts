//import 分割檔案，使用三條斜線作為開頭"///"
//同樣屬於namespace App的才可以讓ts找的到並成功import唷!
/// <reference path="models/drag-drop.ts"/>
/// <reference path="models/project.ts"/>
/// <reference path="state/project-state.ts"/>
/// <reference path="util/validate.ts"/>
/// <reference path="decorators/autoBind.ts"/>
/// <reference path="components/project-input.ts"/>
/// <reference path="components/project-item.ts"/>
/// <reference path="components/project-list.ts"/>
namespace App {
  new ProjectInput();
  new ProjectList("active");
  new ProjectList("finished");
}
