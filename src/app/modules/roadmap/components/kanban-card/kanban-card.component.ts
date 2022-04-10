import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-kanban-card',
  templateUrl: './kanban-card.component.html',
  styleUrls: ['./kanban-card.component.scss']
})
export class KanbanCardComponent  {
  @Input() color: 'primary' | 'link' | 'tertiary' | 'none' = 'none';

}
