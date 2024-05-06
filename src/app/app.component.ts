import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { ProductHighlightComponent } from './components/main/product-highlight/product-highlight.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, MainComponent,ProductHighlightComponent],
  template: `
    <app-header></app-header>
    <app-main></app-main>
    <app-footer></app-footer>
    <router-outlet />
  `,
})
export class AppComponent {
  title = 'coral-ecommerce-angular';
}
