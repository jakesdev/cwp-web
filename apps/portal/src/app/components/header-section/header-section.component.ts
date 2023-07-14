import { Component, Input } from '@angular/core';

@Component({
  selector: 'cwp-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.scss'],
})
export class HeaderSectionComponent {


  constructor(
  ) {
  }

  @Input() bgGray = false;
  showMenu = false;
}
