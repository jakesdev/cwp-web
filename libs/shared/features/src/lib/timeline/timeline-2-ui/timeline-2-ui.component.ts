import { Component, Input } from '@angular/core';

@Component({
  selector: 'cwp-timeline-2-ui',
  templateUrl: './timeline-2-ui.component.html',
  styleUrls: ['./timeline-2-ui.component.css'],
})
export class Timeline2UiComponent {
  @Input() data: any;
}
