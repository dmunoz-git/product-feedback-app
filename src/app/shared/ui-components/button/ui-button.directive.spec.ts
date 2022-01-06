import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { UIButtonDirective } from './ui-button.directive';

@Component({
    template: `<button ui-button [color]="color" [type]="type" [size]="size" [disabled]="disabled"></button>`,
})
class TestComponent {
    color!: string;
    type!: string;
    size!: string;
    disabled!: boolean;
}

describe('UIButtonDirective', () => {
    let fixture: ComponentFixture<TestComponent>;

    beforeEach(async () => {
        fixture = await TestBed.configureTestingModule({
            declarations: [UIButtonDirective, TestComponent],
        }).createComponent(TestComponent);

        fixture.detectChanges();
    });
    it('should create an instance', () => {
        const directive = new UIButtonDirective();
        expect(directive).toBeTruthy();
    });

    it('should add ui-button css class to native element', () => {
        const button = fixture.debugElement.query(By.css('button'));
        expect(button.nativeElement.classList).toContain('ui-button');
    });
});
