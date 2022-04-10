import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss']
})
export class RoadmapComponent {
  @Input() title: string = "";
  @Input() linkLabel: string = "";
  @Input() redirectPath: string = '';
}
