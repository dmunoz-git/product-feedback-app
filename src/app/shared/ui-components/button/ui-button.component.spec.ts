import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { UIButtonComponent } from './ui-button.component';

@Component({
    template: ` <ui-button color="primary" [disabled]="disabled">Button</ui-button>`,
})
class TestComponent {
    disabled: boolean = false;
}

describe('UIButtonComponent', () => {
    let component: UIButtonComponent;
    let testComponent: TestComponent;
    let fixtureTest: ComponentFixture<TestComponent>;
    let fixture: ComponentFixture<UIButtonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UIButtonComponent, TestComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UIButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    beforeEach(() => {
        fixtureTest = TestBed.createComponent(TestComponent);
        testComponent = fixtureTest.componentInstance;
        fixtureTest.detectChanges();
    });

    it('should create an instance', () => {
        component.color = 'primary';
        expect(component).toBeTruthy();
    });

    it('should be button type by default', () => {
        expect(component.type).toBe('button');
    });

    it('should have a disabled css class if button is disabled', async () => {
        testComponent.disabled = true;
        fixtureTest.detectChanges();
        await fixtureTest.whenStable();
        const uiButton = fixtureTest.debugElement.query(By.css('.ui-button'));
        expect(uiButton.nativeElement.classList).toContain('ui-button--disabled');
    });
});
