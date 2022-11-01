import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiChipComponent } from '../chip/ui-chip.component';
import { UiChipListComponent } from './ui-chip-list.component';

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

describe('UiChipListComponent', () => {
    let component: UiChipListComponent;
    let fixture: ComponentFixture<UiChipListComponent>;

    let testFixture: ComponentFixture<TestComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UiChipListComponent, TestComponent, UiChipComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UiChipListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        testFixture = TestBed.createComponent(TestComponent);

        testFixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
