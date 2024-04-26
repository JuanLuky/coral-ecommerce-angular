import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MatIconModule, AsyncPipe, ProductListComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
