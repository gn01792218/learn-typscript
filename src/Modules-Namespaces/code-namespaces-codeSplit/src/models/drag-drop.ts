//我們把Draggable和DragTarget定義在namespace App下，到時候就可以在同樣namespace App的地方import
//namespace 就好像是一個物件，其底下的東西都是property
//namespace 中的東西只能在此namespace中使用，但加上export就可以給外部使用
//namespace中可以放任何東西，class、const ...啥都可以
namespace App {
  // Drag & Drop Interfaces
  export interface Draggable {
    dragStartHandler(event: DragEvent): void;
    dragEndHandler(event: DragEvent): void;
  }

  export interface DragTarget {
    dragOverHandler(event: DragEvent): void;
    dropHandler(event: DragEvent): void;
    dragLeaveHandler(event: DragEvent): void;
  }
}
