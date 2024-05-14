import { Component } from '@angular/core';
import { DefaulLoginComponent } from '../../components/defaul-login/defaul-login.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [DefaulLoginComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
