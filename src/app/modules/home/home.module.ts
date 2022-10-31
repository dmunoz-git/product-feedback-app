import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { UiBadgeModule } from '@components/badge/ui-badge.module';
import { UiButtonModule } from '@components/button/ui-button.module';
import { UiChipsModule } from '@components/chips/ui-chips.module';
import { UiCounterModule } from '@components/counter/ui-counter.module';
import { UiFeedbackCardModule } from '@components/feedback-card/feedback-card.module';
import { UiIconModule } from '@components/icon/ui-icon.module';
import { UiToolbarModule } from '@components/toolbar/ui-toolbar.module';
import { TranslocoModule } from '@ngneat/transloco';
import { BannerModule } from './components/banner/banner.module';
import { CategoryFilterComponent } from './components/category-filter/category-filter.component';
import { EmptyFeedbacksModule } from './components/empty-feedbacks/empty-feedbacks.module';
import { RoadmapModule } from './components/roadmap/roadmap.module';
import { HomeViewComponent } from './views/home-view/home-view.component';

const routes: Routes = [
    {
        path: '',
        component: HomeViewComponent,
        pathMatch: 'full',
    },
];

@NgModule({
    declarations: [CategoryFilterComponent, HomeViewComponent],
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
        RoadmapModule,
    ],
    exports: [RouterModule],
})
export class HomeModule {}
