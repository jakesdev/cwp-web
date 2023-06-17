import { Component, Input } from '@angular/core';

@Component({
  selector: 'cwp-footer-1-ui',
  templateUrl: './footer-1-ui.component.html',
  styleUrls: ['./footer-1-ui.component.scss'],
})
export class Footer1UiComponent {

  @Input() data: any;
}
