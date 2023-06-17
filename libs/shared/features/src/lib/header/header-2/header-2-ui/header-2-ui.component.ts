import { Component, Input } from '@angular/core';

@Component({
  selector: 'cwp-header-2-ui',
  templateUrl: './header-2-ui.component.html',
  styleUrls: ['./header-2-ui.component.scss'],
})
export class Header2UiComponent {
  @Input() data: any;
}
