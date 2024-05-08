import { Component} from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonAlert, IonIcon } from '@ionic/angular/standalone';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  standalone:true,
  imports:[IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonAlert, IonIcon]
})
export class ProductCardComponent  {

  constructor() { }

}
