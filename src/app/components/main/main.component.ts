import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { UseService } from '../../../service/use.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MatIconModule, AsyncPipe],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  private userService = inject(UseService);
  protected product$ = this.userService.getUsers();
}
