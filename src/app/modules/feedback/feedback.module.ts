import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UIBadgeModule } from '@shared/ui-components/badge/ui-badge.module';
import { UIButtonModule } from '@shared/ui-components/button/ui-button.module';
import { UIChipsModule } from '@shared/ui-components/chips/ui-chips.module';
import { UICounterModule } from '@shared/ui-components/counter/ui-counter.module';
import { UIFeedbackCardModule } from '@shared/ui-components/feedback-card/feedback-card.module';
import { UIIconModule } from '@shared/ui-components/icon/ui-icon.module';
import { UIInputModule } from '@shared/ui-components/input/ui-input.module';
import { UISelectModule } from '@shared/ui-components/select/ui-select.module';
import { UIToolbarModule } from '@shared/ui-components/toolbar/ui-toolbar.module';
import { BackBtnComponent } from './components/back-btn/back-btn.component';
import { FormCardComponent } from './components/form-card/form-card.component';
import { FeedbackCreateComponent } from './layouts/feedback-create/feedback-create.component';
import { FeedbackDetailComponent } from './layouts/feedback-detail/feedback-detail.component';
import { FeedbackEditComponent } from './layouts/feedback-edit/feedback-edit.component';

const routes: Routes = [
    {
        path: 'detail/:id',
        component: FeedbackDetailComponent,
    },
    {
        path: 'new',
        component: FeedbackCreateComponent,
    },
    {
        path: 'edit/:id',
        component: FeedbackEditComponent,
    },
];

@NgModule({
    declarations: [FeedbackDetailComponent, FeedbackCreateComponent, FeedbackEditComponent, BackBtnComponent, FormCardComponent],
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
        UIInputModule,
        UISelectModule,
    ],
    exports: [RouterModule],
})
export class FeedbackModule {}
