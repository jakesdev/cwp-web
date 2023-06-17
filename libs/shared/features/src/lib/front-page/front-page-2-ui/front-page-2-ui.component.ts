import { Component, Input } from '@angular/core';

@Component({
  selector: 'cwp-front-page-2-ui',
  templateUrl: './front-page-2-ui.component.html',
  styleUrls: ['./front-page-2-ui.component.scss'],
})
export class FrontPage2UiComponent {
  @Input() data: any;
}
