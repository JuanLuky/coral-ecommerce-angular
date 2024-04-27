import { Component, inject } from '@angular/core';
import { UseService } from '../../../../service/use.service';
import { MatIconModule } from '@angular/material/icon';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [MatIconModule, AsyncPipe, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  allProducts!: any[]; // Array para armazenar todos os produtos
  filteredProducts!: any[];

  private userService = inject(UseService);
  protected product$ = this.userService
    .getUsers()
    .subscribe((products: any[]) => {
      this.allProducts = products;
      this.filteredProducts = products; // Começamos exibindo todos os produtos
    });

    filterProducts(brand: string) {
      if (brand === 'All') {
        this.filteredProducts = this.allProducts;
      } else {
        this.filteredProducts = this.allProducts.filter(product => product.brand === brand); // Filtramos os produtos pela marca selecionada
      }
    }
}
