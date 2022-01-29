import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-category-filter',
    templateUrl: './category-filter.component.html',
    styleUrls: ['./category-filter.component.scss'],
})
export class CategoryFilterComponent {
    @Output() category: EventEmitter<string> = new EventEmitter();

    getCategory(category: string) {
        this.category.emit(category);
    }
}
