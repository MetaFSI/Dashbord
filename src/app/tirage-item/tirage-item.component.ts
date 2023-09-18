import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-tirage-item',
  templateUrl: './tirage-item.component.html',
  styleUrls: ['./tirage-item.component.scss']
})
export class TirageItemComponent {
  @Input() qtt!: number; 
  @Input() ligne!: number;
  @Input() tireur!:string; 
}
