import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UIBadgeModule } from '@shared/ui-components/badge/ui-badge.module';
import { UIButtonModule } from '@shared/ui-components/button/ui-button.module';
import { UIChipsModule } from '@shared/ui-components/chips/ui-chips.module';
import { UICounterModule } from '@shared/ui-components/counter/ui-counter.module';
import { UIFeedbackCardModule } from '@shared/ui-components/feedback-card/feedback-card.module';
import { UIIconModule } from '@shared/ui-components/icon/ui-icon.module';
import { UIToolbarModule } from '@shared/ui-components/toolbar/ui-toolbar.module';
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
        UIToolbarModule,
        UIButtonModule,
        UIIconModule,
        UIFeedbackCardModule,
        UICounterModule,
        UIChipsModule,
        UIBadgeModule,
    ],
    exports: [RouterModule],
})
export class FeedbackModule {}
