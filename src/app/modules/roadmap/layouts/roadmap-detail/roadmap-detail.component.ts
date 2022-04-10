import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-roadmap-detail',
  templateUrl: './roadmap-detail.component.html',
  styleUrls: ['./roadmap-detail.component.scss']
})
export class RoadmapDetailComponent  {

  constructor(private location: Location) {}

    back() {
        this.location.back();
    }

}
