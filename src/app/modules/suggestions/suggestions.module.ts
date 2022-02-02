import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { UIBadgeModule } from '@shared/ui-components/badge/ui-badge.module';
import { UIButtonModule } from '@shared/ui-components/button/ui-button.module';
import { UIChipsModule } from '@shared/ui-components/chips/ui-chips.module';
import { UICounterModule } from '@shared/ui-components/counter/ui-counter.module';
import { UIIconModule } from '@shared/ui-components/icon/ui-icon.module';
import { UIToolbarModule } from '@shared/ui-components/toolbar/ui-toolbar.module';
import { UIFeedbackCardModule } from '../../shared/ui-components/feedback-card/feedback-card.module';
import { BannerModule } from './components/banner/banner.module';
import { CategoryFilterComponent } from './components/category-filter/category-filter.component';
import { EmptyFeedbacksModule } from './components/empty-feedbacks/empty-feedbacks.module';
import { SuggestionsLayoutComponent } from './layout/suggestions-layout.component';

const routes: Routes = [
    {
        path: '',
        component: SuggestionsLayoutComponent,
        pathMatch: 'full',
    },
];

@NgModule({
    declarations: [SuggestionsLayoutComponent, CategoryFilterComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        UICounterModule,
        UIBadgeModule,
        UIChipsModule,
        UIIconModule,
        UIToolbarModule,
        UIButtonModule,
        UIFeedbackCardModule,
        EmptyFeedbacksModule,
        BannerModule,
        TranslocoModule,
    ],
    exports: [RouterModule],
})
export class SuggestionsModule {}
