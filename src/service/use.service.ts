import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from './product.model';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UseService {
  private http = inject(HttpClient);
  private URL_API = `${environment.api}`

  getUsers() {
    return this.http.get<Product[]>(this.URL_API)
  }
}
