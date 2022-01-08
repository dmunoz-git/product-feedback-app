import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UIChipComponent } from '../chip/ui-chip.component';

import { UIChipListComponent } from './ui-chip-list.component';
@Component({
    template: ` <ui-chip-list (selected)="getSelectedItem($event)">
        <ui-chip>Item 1</ui-chip>
        <ui-chip>Item 2</ui-chip>
        <ui-chip>Item 3</ui-chip>
    </ui-chip-list>`,
})
class TestComponent {
    selected: string = '';
    getSelectedItem(selected: string) {
        this.selected = selected;
    }
}

describe('UIChipListComponent', () => {
    let component: UIChipListComponent;
    let fixture: ComponentFixture<UIChipListComponent>;

    let testFixture: ComponentFixture<TestComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UIChipListComponent, TestComponent, UIChipComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UIChipListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        testFixture = TestBed.createComponent(TestComponent);

        testFixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
