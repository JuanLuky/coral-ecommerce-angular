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

interface SignupForm {
  name: FormControl;
  email: FormControl;
  password: FormControl;
  passwordConfirm: FormControl;
}


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [DefaulLoginComponent, ReactiveFormsModule, PrimaryInputComponent, CommonModule],
  providers: [LoginService],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  signupForm!: FormGroup<SignupForm>;
  loading: boolean = false;

  private router = inject(Router);
  private loginService = inject(LoginService);

  constructor(private toastService: ToastrService) {
    this.signupForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      passwordConfirm: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
  submitLogin() {
      this.loginService.signup(this.signupForm.value.name, this.signupForm.value.email, this.signupForm.value.password).subscribe({
        next: () => {
          this.toastService.success('Registrado com sucesso!');
        },
        error: (error) => {
          this.toastService.error('Error inesperado! Tente novamente');
        },
        complete: () => {}
      });
  }

  submitRegister() {
    this.router.navigate(['/login']);
  }
}
