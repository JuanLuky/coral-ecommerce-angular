import { ToastrService, provideToastr } from 'ngx-toastr';
import { Component, inject } from '@angular/core';
import { DefaulLoginComponent } from '../../components/defaul-login/defaul-login.component';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../../service/login.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [DefaulLoginComponent, ReactiveFormsModule, PrimaryInputComponent, CommonModule],
  providers: [LoginService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm!: FormGroup;
  loading: boolean = false;

  private router = inject(Router);
  private loginService = inject(LoginService);

  constructor(private toastService: ToastrService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
  submitLogin() {
      this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
        next: () => {
          this.toastService.success('Login feito com sucesso!');
          this.loading = true;
          setTimeout(() => {
            this.router.navigate(['/home']);
          }, 1000);
        },
        error: (error) => {
          this.toastService.error('Error inesperado! Tente novamente');
        },
        complete: () => {
          this.loading = false;
        }
      });
  }

  submitRegister() {

  }
}
