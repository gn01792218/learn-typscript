//我們把Draggable和DragTarget定義在namespace App下，到時候就可以在同樣namespace的地方import
//namespace 就好像是一個物件，其底下的東西都是property
//namespace 中的東西只能在此namespace中使用，但加上export就可以給外部使用
//namespace中可以放任何東西，class、const ...啥都可以
//
namespace App {
  // Project Type
  export enum ProjectStatus {
    Active,
    Finished,
  }

  export class Project {
    constructor(
      public id: string,
      public title: string,
      public description: string,
      public people: number,
      public status: ProjectStatus
    ) {}
  }
}
