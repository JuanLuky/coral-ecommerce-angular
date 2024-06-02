import { Component, EventEmitter, Input, Output, inject } from '@angular/core';

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

  submit() {
    this.onLogin.emit();
  }
  navigate() {
    this.onRegister.emit();
  }
}
