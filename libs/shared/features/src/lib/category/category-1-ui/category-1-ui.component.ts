import { Component, Input } from '@angular/core';

@Component({
  selector: 'cwp-category-1-ui',
  templateUrl: './category-1-ui.component.html',
  styleUrls: ['./category-1-ui.component.scss'],
})
export class Category1UiComponent {
  @Input() data: any;
}
