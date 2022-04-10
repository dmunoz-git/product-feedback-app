import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoadmapComponent } from './roadmap.component';
import { RoadmapItemComponent } from './roadmap-item.component';

@NgModule({
  declarations: [RoadmapComponent, RoadmapItemComponent],
  imports: [
    CommonModule
  ],
  exports: [RoadmapComponent, RoadmapItemComponent],
})
export class RoadmapModule { }
