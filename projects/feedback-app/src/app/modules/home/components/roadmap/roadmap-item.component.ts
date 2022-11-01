import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-roadmap-item',
    template: ` <li class="roadmap-item">
        <span class="roadmap-item__status" [ngClass]="'roadmap-item__status--' + color"><ng-content></ng-content></span>
        <span class="roadmap-item__counter">{{ amound }}</span>
    </li>`,
    styleUrls: ['roadmap-item.component.scss'],
})
export class RoadmapItemComponent {
    @Input() color: 'primary' | 'link' | 'tertiary' | 'none' = 'none';
    @Input() amound: number = 0;
}
