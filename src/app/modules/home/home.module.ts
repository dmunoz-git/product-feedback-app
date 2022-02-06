import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { UiBadgeModule } from '@shared/ui-components/badge/ui-badge.module';
import { UiButtonModule } from '@shared/ui-components/button/ui-button.module';
import { UiChipsModule } from '@shared/ui-components/chips/ui-chips.module';
import { UiCounterModule } from '@shared/ui-components/counter/ui-counter.module';
import { UiIconModule } from '@shared/ui-components/icon/ui-icon.module';
import { UiToolbarModule } from '@shared/ui-components/toolbar/ui-toolbar.module';
import { UiFeedbackCardModule } from '../../shared/ui-components/feedback-card/feedback-card.module';
import { BannerModule } from './components/banner/banner.module';
import { CategoryFilterComponent } from './components/category-filter/category-filter.component';
import { EmptyFeedbacksModule } from './components/empty-feedbacks/empty-feedbacks.module';
import { HomeComponent } from './layout/home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
    },
];

@NgModule({
    declarations: [HomeComponent, CategoryFilterComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        UiCounterModule,
        UiBadgeModule,
        UiChipsModule,
        UiIconModule,
        UiToolbarModule,
        UiButtonModule,
        UiFeedbackCardModule,
        EmptyFeedbacksModule,
        BannerModule,
        TranslocoModule,
    ],
    exports: [RouterModule],
})
export class HomeModule {}
