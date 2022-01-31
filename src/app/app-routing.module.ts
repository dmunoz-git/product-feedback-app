import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./modules/suggestions/suggestions.module').then((m) => m.SuggestionsModule),
    },

    {
        path: 'feedback',
        loadChildren: () => import('./modules/feedback/feedback.module').then((m) => m.FeedbackModule),
    },

    {
        path: '**',
        redirectTo: '',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
