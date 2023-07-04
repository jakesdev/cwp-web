import { Component, Input } from '@angular/core';

@Component({
  selector: 'cwp-front-page-3-ui',
  templateUrl: './front-page-3-ui.component.html',
  styleUrls: ['./front-page-3-ui.component.scss'],
})
export class FrontPage3UiComponent {

  @Input() data: any;
}
