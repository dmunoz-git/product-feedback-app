import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { UiBadgeModule } from '@shared/ui-components/badge/ui-badge.module';
import { UiButtonModule } from '@shared/ui-components/button/ui-button.module';
import { UiChipsModule } from '@shared/ui-components/chips/ui-chips.module';
import { UiCounterModule } from '@shared/ui-components/counter/ui-counter.module';
import { UiDividerModule } from '@shared/ui-components/divider/ui-divider.module';
import { UiFeedbackCardModule } from '@shared/ui-components/feedback-card/feedback-card.module';
import { UiFormFieldModule } from '@shared/ui-components/form-field/ui-form-field.module';
import { UiIconModule } from '@shared/ui-components/icon/ui-icon.module';
import { UiInputModule } from '@shared/ui-components/input/ui-input.module';
import { UiSelectModule } from '@shared/ui-components/select/ui-select.module';
import { UiToolbarModule } from '@shared/ui-components/toolbar/ui-toolbar.module';
import { BackBtnComponent } from './components/back-btn/back-btn.component';
import { CommentModule } from './components/comment/comment.module';
import { FormCardComponent } from './components/form-card/form-card.component';
import { FeedbackDetailComponent } from './layouts/feedback-detail/feedback-detail.component';
import { FeedbackFormComponent } from './layouts/feedback-form/feedback-form.component';

const routes: Routes = [
    {
        path: 'detail/:id',
        component: FeedbackDetailComponent,
    },
    {
        path: 'new',
        component: FeedbackFormComponent,
    },

    {
        path: 'edit/:id',
        component: FeedbackFormComponent,
    },
];

@NgModule({
    declarations: [FeedbackDetailComponent, FeedbackFormComponent, BackBtnComponent, FormCardComponent],
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
        UiFormFieldModule,
        UiInputModule,
        UiSelectModule,
        UiDividerModule,
        CommentModule,
        TranslocoModule,
        ReactiveFormsModule,
    ],
    exports: [RouterModule],
})
export class FeedbackModule {}
