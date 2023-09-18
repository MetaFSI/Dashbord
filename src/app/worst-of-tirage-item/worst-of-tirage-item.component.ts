import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-worst-of-tirage-item',
  templateUrl: './worst-of-tirage-item.component.html',
  styleUrls: ['./worst-of-tirage-item.component.scss']
})
export class WorstOfTirageItemComponent {
  @Input() qtt!: number; 
  @Input() ligne!: number;
  @Input() tireur!:string; 
}
