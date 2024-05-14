import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from './product.model';
import { environment } from '../environments/environment.development';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UseService {
  private http = inject(HttpClient);
  private URL_API = `${environment.api}`

  private cartItemsSource = new BehaviorSubject<Product[]>([]);
  cartItems$ = this.cartItemsSource.asObservable();

  getProducts() {
    return this.http.get<Product[]>(this.URL_API)
  }

  updateSelectedProduct(product: Product) {
    const currentItems = this.cartItemsSource.getValue();
    this.cartItemsSource.next([...currentItems, product]);
  }
}
