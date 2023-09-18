import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-command-item',
  templateUrl: './command-item.component.html',
  styleUrls: ['./command-item.component.scss']
})
export class CommandItemComponent {
  @Input() pharName!: any; 
  @Input() pharCode!: any;
  @Input() tireurNumber!:any; 
  @Input() controlerNumber!:any; 
  @Input() inprimeTime!:any; 
}
