import { Component, Input } from '@angular/core';

@Component({
  selector: 'cwp-timeline-1-ui',
  templateUrl: './timeline-1-ui.component.html',
  styleUrls: ['./timeline-1-ui.component.css'],
})
export class Timeline1UiComponent {
  @Input() data: any;
}
