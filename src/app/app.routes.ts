import { Routes } from '@angular/router';
import { DefaulLoginComponent } from './components/defaul-login/defaul-login.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from '../service/auth.guard';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];
