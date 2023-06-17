import { Component, Input } from '@angular/core';

@Component({
  selector: 'cwp-category-2-ui',
  templateUrl: './category-2-ui.component.html',
  styleUrls: ['./category-2-ui.component.scss'],
})
export class Category2UiComponent {
  @Input() data: any;
}
