import { Router } from '@angular/router';
import { AuthGuard } from '../../../service/auth.guard';
import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-defaul-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './defaul-login.component.html',
  styleUrl: './defaul-login.component.scss'
})
export class DefaulLoginComponent {

  @Input() title = '';
  @Input() primaryBtnText = '';
  @Input() secundaryBtnText = '';

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
