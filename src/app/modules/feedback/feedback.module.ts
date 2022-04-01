import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { UiBadgeModule } from '@components/badge/ui-badge.module';
import { UiButtonModule } from '@components/button/ui-button.module';
import { UiChipsModule } from '@components/chips/ui-chips.module';
import { UiCounterModule } from '@components/counter/ui-counter.module';
import { UiDividerModule } from '@components/divider/ui-divider.module';
import { UiFeedbackCardModule } from '@components/feedback-card/feedback-card.module';
import { UiFormFieldModule } from '@components/form-field/ui-form-field.module';
import { UiIconModule } from '@components/icon/ui-icon.module';
import { UiInputModule } from '@components/input/ui-input.module';
import { UiSelectModule } from '@components/select/ui-select.module';
import { UiToolbarModule } from '@components/toolbar/ui-toolbar.module';
import { TranslocoModule } from '@ngneat/transloco';
import { BackBtnComponent } from './components/back-btn/back-btn.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { CommentModule } from './components/comment/comment.module';
import { FormCardComponent } from './components/form-card/form-card.component';
import { FeedbackDetailComponent } from './layouts/feedback-detail/feedback-detail.component';
import { FeedbackFormComponent } from './layouts/feedback-form/feedback-form.component';
import { ReplyComponent } from './components/reply/reply.component';

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
    declarations: [FeedbackDetailComponent, FeedbackFormComponent, BackBtnComponent, FormCardComponent, CommentFormComponent, ReplyComponent],
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
