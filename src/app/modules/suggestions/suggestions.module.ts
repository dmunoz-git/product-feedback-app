import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
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
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SuggestionsModule {}
