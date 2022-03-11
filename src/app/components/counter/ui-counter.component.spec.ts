import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiCounterComponent } from './ui-counter.component';

describe('UiCounterComponent', () => {
    let component: UiCounterComponent;
    let fixture: ComponentFixture<UiCounterComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UiCounterComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UiCounterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should increment value', () => {
        const event: Event = new Event('click');
        component.increment(event);
        expect(component.value).toBe(1);
    });

    it('should not increment value if it is active', () => {
        const event: Event = new Event('click');
        component.active = true;
        component.increment(event);
        expect(component.value).toBe(0);
    });

    it('should never be active if limitClicksTo is minor or equal to 0', async () => {
        const event = new Event('click');
        component.limitClicksTo = 0;
        fixture.detectChanges();
        await fixture.whenStable();
        component.increment(event);
        component.increment(event);
        expect(component.value).toBe(2);
    });

    it('should be active if limitClicksTo is equal to 1', async () => {
        const event = new Event('click');
        component.limitClicksTo = 1;
        fixture.detectChanges();
        await fixture.whenStable();
        component.increment(event);
        expect(component.active).toBe(true);
    });

    it('should increment value if limitClicksTo mayor than 0', async () => {
        const event = new Event('click');
        component.limitClicksTo = 1;
        component.value = 2;
        fixture.detectChanges();
        await fixture.whenStable();
        component.increment(event);
        component.increment(event);
        expect(component.value).toBe(3);
    });
});
