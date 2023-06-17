import { Component, Input } from '@angular/core';

@Component({
  selector: 'cwp-front-page-1-ui',
  templateUrl: './front-page-1-ui.component.html',
  styleUrls: ['./front-page-1-ui.component.scss'],
})
export class FrontPage1UiComponent {
  @Input() data: any;
}
