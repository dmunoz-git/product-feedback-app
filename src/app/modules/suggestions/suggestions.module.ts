import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UIBadgeModule } from '@shared/ui-components/badge/ui-badge.module';
import { UIChipsModule } from '@shared/ui-components/chips/ui-chips.module';
import { UICounterModule } from '@shared/ui-components/counter/ui-counter.module';
import { UIIconModule } from '@shared/ui-components/icon/ui-icon.module';
import { FeedbackCardModule } from './components/feedback-card/feedback-card.module';
import { SuggestionsLayoutComponent } from './layout/suggestions-layout.component';

const routes: Routes = [
    {
        path: '',
        component: SuggestionsLayoutComponent,
        pathMatch: 'full',
    },
];

@NgModule({
    declarations: [SuggestionsLayoutComponent],
    imports: [CommonModule, RouterModule.forChild(routes), UICounterModule, UIBadgeModule, UIChipsModule, UIIconModule, FeedbackCardModule],
    exports: [RouterModule],
})
export class SuggestionsModule {}
