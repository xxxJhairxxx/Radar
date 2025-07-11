import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        loadChildren: () =>
            import('./views/pages/pages.module').then(
                (m) => m.PagesModule
            ),
    },
];
