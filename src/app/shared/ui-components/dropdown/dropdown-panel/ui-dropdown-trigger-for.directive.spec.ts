import { Overlay } from '@angular/cdk/overlay';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { By } from '@angular/platform-browser';
import { UIDropdownTriggerForDirective } from './ui-dropdown-trigger-for.directive';

@Component({
    template: `<button [uiDropdownTriggerFor]="menu">Menu</button> `,
})
class TestComponent {}

describe('UIDropdownTriggerForDirective', () => {
    let fixture: ComponentFixture<TestComponent>;
    // let des;
    beforeEach(() => {
        fixture = TestBed.configureTestingModule({
            declarations: [UIDropdownTriggerForDirective, TestComponent],
            providers: [Overlay],
        }).createComponent(TestComponent);

        fixture.detectChanges();

        // des = fixture.debugElement.queryAll(By.directive(UIDropdownTriggerForDirective));
    });
    it('should be an instace', () => {
        expect(fixture).toBeTruthy();
    });
});
