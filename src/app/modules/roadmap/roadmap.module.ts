import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoadmapDetailComponent } from './views/roadmap-detail/roadmap-detail.component';
import { RouterModule } from '@angular/router';
import { UiToolbarModule } from '@components/toolbar/ui-toolbar.module';
import { UiButtonModule } from '@components/button/ui-button.module';
import { UiIconModule } from '@components/icon/ui-icon.module';
import { TranslocoModule } from '@ngneat/transloco';
import { KanbanCardModule } from './components/kanban-card/kanban-card.module';
import { KanbanColumnComponent } from './components/kanban-column/kanban-column.component';
import { KanbanBoardComponent } from './components/kanban-board/kanban-board.component';
import { UiCounterModule } from '@components/counter/ui-counter.module';
import { UiBadgeModule } from '@components/badge/ui-badge.module';
import { UiChipsModule } from '@components/chips/ui-chips.module';

const routes = [
    {
        path: ':category',
        component: RoadmapDetailComponent,
        pathMatch: 'full',
    },
];

@NgModule({
    declarations: [RoadmapDetailComponent, KanbanColumnComponent, KanbanBoardComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        TranslocoModule,
        UiToolbarModule,
        UiButtonModule,
        UiIconModule,
        KanbanCardModule,
        UiCounterModule,
        UiBadgeModule,
        UiChipsModule,
    ],
})
export class RoadmapModule {}
