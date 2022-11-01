import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoadmapComponent } from './roadmap.component';
import { RoadmapItemComponent } from './roadmap-item.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [RoadmapComponent, RoadmapItemComponent],
    imports: [CommonModule, RouterModule],
    exports: [RoadmapComponent, RoadmapItemComponent],
})
export class RoadmapModule {}
