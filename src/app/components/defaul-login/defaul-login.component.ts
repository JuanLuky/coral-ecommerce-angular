import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-defaul-login',
  standalone: true,
  imports: [],
  templateUrl: './defaul-login.component.html',
  styleUrl: './defaul-login.component.scss'
})
export class DefaulLoginComponent {

  @Input() title = '';
  @Input() primaryBtnText = '';
  @Input() secundaryBtnText = '';
  @Input() desablePrimaryBtn: boolean = true;
  @Output("submit") onLogin = new EventEmitter();
  @Output("navigate") onRegister = new EventEmitter();

  private router = inject(Router);

  submit() {
    this.onLogin.emit();
  }
  navigate() {
    this.router.navigate(["/signup"]);
  }

}
