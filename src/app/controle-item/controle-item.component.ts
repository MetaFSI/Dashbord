import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-controle-item',
  templateUrl: './controle-item.component.html',
  styleUrls: ['./controle-item.component.scss']
})
export class ControleItemComponent {
  @Input() qtt!: number; 
  @Input() ligne!: number;
  @Input() controler!:string; 
}
