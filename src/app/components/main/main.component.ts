import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductHighlightComponent } from './product-highlight/product-highlight.component';
import { ProductCollectionsComponent } from './product-collections/product-collections.component';
import { ModalCartComponent } from './modal-cart/modal-cart.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    ProductListComponent,
    ProductHighlightComponent,
    ProductCollectionsComponent,
    ModalCartComponent
  ],
  templateUrl: './main.component.html',
})
export class MainComponent {}
