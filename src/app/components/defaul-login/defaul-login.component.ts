import { Router } from '@angular/router';
import { AuthGuard } from '../../../service/auth.guard';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-defaul-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './defaul-login.component.html',
  styleUrl: './defaul-login.component.scss'
})
export class DefaulLoginComponent {
  loading: boolean = false;


  private router = inject(Router);
  private useAuthGuard = inject(AuthGuard);

  login(): void {
    this.loading = true;
    setTimeout(() => {
      this.useAuthGuard.isUsuarioLogado();
      this.router.navigate(['/home']);
      this.loading = false;
    }, 1000);
  }
}
