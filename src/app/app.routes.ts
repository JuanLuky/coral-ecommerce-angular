import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AuthGuard } from '../service/auth-guard.service';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate:[AuthGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];
