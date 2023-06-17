import { Component, Input } from '@angular/core';

@Component({
  selector: 'cwp-gallery-1-ui',
  templateUrl: './gallery-1-ui.component.html',
  styleUrls: ['./gallery-1-ui.component.css'],
})
export class Gallery1UiComponent {
  @Input() data: any;
}
