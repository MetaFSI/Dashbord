import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-best-of-tirage-item',
  templateUrl: './best-of-tirage-item.component.html',
  styleUrls: ['./best-of-tirage-item.component.scss']
})
export class BestOfTirageItemComponent {
  @Input() qtt!: number; 
  @Input() ligne!: number;
  @Input() tireur!:string; 
}
