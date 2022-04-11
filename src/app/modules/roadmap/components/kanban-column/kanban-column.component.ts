import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-kanban-column',
  templateUrl: './kanban-column.component.html',
  styleUrls: ['./kanban-column.component.scss']
})
export class KanbanColumnComponent {
  @Input() title:string = "Title";
  @Input() subtitle: string = "subtitle";
}
