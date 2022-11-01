import { Component, Directive, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-kanban-card',
    templateUrl: './kanban-card.component.html',
    styleUrls: ['./kanban-card.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class KanbanCardComponent {
    @Input() color: 'primary' | 'link' | 'tertiary' | 'none' = 'none';
    @Input() status: string = 'status';
}

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[kanban-card-title]',
    // eslint-disable-next-line @angular-eslint/no-host-metadata-property
    host: {
        class: 'kanban-card__title',
    },
})
export class KanbanCardTitleDirective {}

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[kanban-card-text]',
    // eslint-disable-next-line @angular-eslint/no-host-metadata-property
    host: {
        class: 'kanban-card__text',
    },
})
export class KanbanCardTextDirective {}
