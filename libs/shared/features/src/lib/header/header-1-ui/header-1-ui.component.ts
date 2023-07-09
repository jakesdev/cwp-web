import { Component, Input } from '@angular/core';

@Component({
  selector: 'cwp-header-1-ui',
  templateUrl: './header-1-ui.component.html',
  styleUrls: ['./header-1-ui.component.scss'],
})
export class Header1UiComponent {

  @Input() data: any;

  @Input() disabledTagA = false;

  @Input() logo = '';
}
