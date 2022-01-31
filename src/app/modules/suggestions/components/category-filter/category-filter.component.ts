import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-category-filter',
    templateUrl: './category-filter.component.html',
    styleUrls: ['./category-filter.component.scss'],
})
export class CategoryFilterComponent {
    @Output() categorySelected = new EventEmitter<string>();

    categories = [
        {
            name: 'all',
            selected: true,
        },
        {
            name: 'ui',
            selected: false,
        },
        {
            name: 'ux',
            selected: false,
        },
        {
            name: 'enhancement',
            selected: false,
        },
        {
            name: 'bug',
            selected: false,
        },
        {
            name: 'feature',
            selected: false,
        },
    ];

    setCategory(categoryName: string) {
        this.categories.forEach((c) => (c.selected = c.name === categoryName));

        this.categorySelected.emit(categoryName);
    }

    getCategoryActive(category: string) {
        return this.categories.filter((c) => c.name === category)[0].selected;
    }
}
