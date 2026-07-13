import { provideRouter, Route } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';

const routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'category/:category', component: CategoryDetailComponent },
  { path: '**', redirectTo: '' },
];

export const appRoutes = routes;
export const appProviders = [provideRouter(routes)];
