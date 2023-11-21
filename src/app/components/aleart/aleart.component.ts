import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-aleart',
  templateUrl: './aleart.component.html',
  styleUrls: ['./aleart.component.css'],
})
export class AleartComponent {
  @Input() aleart = '';
}
