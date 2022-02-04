import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiBadgeModule } from '@shared/ui-components/badge/ui-badge.module';
import { UiButtonModule } from '@shared/ui-components/button/ui-button.module';
import { UiChipsModule } from '@shared/ui-components/chips/ui-chips.module';
import { UiCounterModule } from '@shared/ui-components/counter/ui-counter.module';
import { UiFeedbackCardModule } from '@shared/ui-components/feedback-card/feedback-card.module';
import { UiIconModule } from '@shared/ui-components/icon/ui-icon.module';
import { UiToolbarModule } from '@shared/ui-components/toolbar/ui-toolbar.module';
import { BackBtnComponent } from './components/back-btn/back-btn.component';
import { FeedbackDetailComponent } from './layouts/feedback-detail/feedback-detail.component';

const routes: Routes = [
    {
        path: 'detail/:id',
        component: FeedbackDetailComponent,
    },
];

@NgModule({
    declarations: [FeedbackDetailComponent, BackBtnComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        UiToolbarModule,
        UiButtonModule,
        UiIconModule,
        UiFeedbackCardModule,
        UiCounterModule,
        UiChipsModule,
        UiBadgeModule,
    ],
    exports: [RouterModule],
})
export class FeedbackModule {}
