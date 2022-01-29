import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-category-filter',
    templateUrl: './category-filter.component.html',
    styleUrls: ['./category-filter.component.scss'],
})
export class CategoryFilterComponent implements OnInit {
    category: FormControl = new FormControl({ value: 'all', disabled: false });

    ngOnInit(): void {
        this.category.valueChanges.subscribe((value) => {
            console.log(value);
        });
    }
}
