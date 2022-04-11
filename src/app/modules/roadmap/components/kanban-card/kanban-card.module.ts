import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanCardComponent, KanbanCardTextDirective, KanbanCardTitleDirective } from './kanban-card';

@NgModule({
  declarations: [
    KanbanCardComponent,
    KanbanCardTitleDirective,
    KanbanCardTextDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    KanbanCardComponent,  
    KanbanCardTitleDirective,
    KanbanCardTextDirective
  ]
})
export class KanbanCardModule { }
