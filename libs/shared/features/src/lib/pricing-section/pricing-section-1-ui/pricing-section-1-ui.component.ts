import { Component, Input } from '@angular/core';

@Component({
  selector: 'cwp-pricing-section-1-ui',
  templateUrl: './pricing-section-1-ui.component.html',
  styleUrls: ['./pricing-section-1-ui.component.scss'],
})
export class PricingSection1UiComponent {
  @Input() data: any;
}
