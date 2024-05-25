import { Component } from '@angular/core';
import { UseService } from '../../../../service/use.service';
import { CommonModule } from '@angular/common';
import { Product } from '../../../types/product.model';

@Component({
  selector: 'app-modal-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-cart.component.html',
  styleUrl: './modal-cart.component.scss'
})
export class ModalCartComponent {
  cartItems: Product[] = [];

  constructor(private productService: UseService) {
    this.productService.cartItems$.subscribe(items => {
      this.cartItems = items;
    });
  }
}
