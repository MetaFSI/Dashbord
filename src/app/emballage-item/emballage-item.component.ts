import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-emballage-item',
  templateUrl: './emballage-item.component.html',
  styleUrls: ['./emballage-item.component.scss']
})
export class EmballageItemComponent {
  @Input() qtt!: number; 
  @Input() ligne!: number;
  @Input() emballager!:string; 
}
