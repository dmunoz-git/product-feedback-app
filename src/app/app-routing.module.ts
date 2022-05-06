import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule),
    },

    {
        path: 'feedback',
        loadChildren: () => import('./modules/feedback/feedback.module').then((m) => m.FeedbackModule),
    },

    {
        path: 'roadmap',
        loadChildren: () => import('./modules/roadmap/roadmap.module').then((m)=> m.RoadmapModule)
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
