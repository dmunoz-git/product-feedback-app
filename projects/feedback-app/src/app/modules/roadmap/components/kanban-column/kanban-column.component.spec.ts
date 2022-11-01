import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanColumnComponent } from './kanban-column.component';

describe('KanbanColumnComponent', () => {
    let component: KanbanColumnComponent;
    let fixture: ComponentFixture<KanbanColumnComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [KanbanColumnComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(KanbanColumnComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
