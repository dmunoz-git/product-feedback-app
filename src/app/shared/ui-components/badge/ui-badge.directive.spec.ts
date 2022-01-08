import { Component, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { UIBadgeDirective } from './ui-badge.directive';

@Component({
    template: ` <button ui-badge [value]="value">Button</button>`,
})
class TestComponent {
    value!: number;

    changeValue(value: number) {
        this.value = value;
    }
}

class MockElementRef extends ElementRef {
    constructor(value: any) {
        super(null);
        this.nativeElement = value;
    }
}

let mockElementRef = new MockElementRef(0);

describe('UIBadgeDirective', () => {
    let fixture: ComponentFixture<TestComponent>;
    let component: TestComponent;

    beforeEach(() => {
        fixture = TestBed.configureTestingModule({
            declarations: [UIBadgeDirective, TestComponent],
        }).createComponent(TestComponent);

        component = fixture.componentInstance;

        fixture.detectChanges();
    });
    it('should create an instance', () => {
        const directive = new UIBadgeDirective(document, mockElementRef);
        expect(directive).toBeTruthy();
    });

    it('should create an span projecting the input value', () => {
        component.changeValue(9);
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            const badge = fixture.debugElement.query(By.css('.ui-badge'));
            expect(badge.nativeElement.textContent).toBe('9');
        });
    });

    it('should show 0 output when there is a negative input value', async () => {
        component.changeValue(-9);
        fixture.detectChanges();
        await fixture.whenStable();
        const badge = fixture.debugElement.query(By.css('.ui-badge'));
        expect(badge.nativeElement.textContent).toBe('0');
    });

    it('should show 0 output when there is a decimal input value', async () => {
        component.changeValue(1.5);
        fixture.detectChanges();
        await fixture.whenStable();
        const badge = fixture.debugElement.query(By.css('.ui-badge'));
        expect(badge.nativeElement.textContent).toBe('0');
    });
});
