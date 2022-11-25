import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

/**
 * @title Drag&Drop disabled sorting
 */
@Component({
  selector: 'list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.css'],
})
export class List {
  items = ['Karla', 'Maria', 'Julio', 'Mario', 'Fernando'];

  basket = ['Gabriela', 'Neymar', 'Aline'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
