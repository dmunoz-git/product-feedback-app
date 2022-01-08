import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SuggestionsLayoutComponent } from './layout/suggestions-layout.component';
import { FeedbackCardComponent } from './components/feedback-card/feedback-card.component';
import { UICounterModule } from '@shared/ui-components/counter/ui-counter.module';
import { UIBadgeModule } from '@shared/ui-components/badge/ui-badge.module';
import { UIChipsModule } from '@shared/ui-components/chips/ui-chips.module';
import { UIIconModule } from '@shared/ui-components/icon/ui-icon.module';

const routes: Routes = [
    {
        path: '',
        component: SuggestionsLayoutComponent,
        pathMatch: 'full',
    },
];

@NgModule({
    declarations: [SuggestionsLayoutComponent, FeedbackCardComponent],
    imports: [CommonModule, RouterModule.forChild(routes), UICounterModule, UIBadgeModule, UIChipsModule, UIIconModule],
    exports: [RouterModule],
})
export class SuggestionsModule {}
