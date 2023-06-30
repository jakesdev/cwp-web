import { Component, Input } from '@angular/core';

@Component({
  selector: 'cwp-gallery-2-ui',
  templateUrl: './gallery-2-ui.component.html',
  styleUrls: ['./gallery-2-ui.component.scss'],
})
export class Gallery2UiComponent {
  @Input() data: any;
}
