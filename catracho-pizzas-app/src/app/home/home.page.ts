import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ProductCardComponent],
})
export class HomePage {
  constructor() {}
}
