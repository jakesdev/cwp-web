import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'cwp-pricing-section',
  templateUrl: './pricing-section.component.html',
  styleUrls: ['./pricing-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricingSectionComponent implements OnInit {

  plans: any[] = [];

  popularPlan$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(
) {}

  ngOnInit(): void {
    this.getPlans();
  }

  getPlans() {
  }

  buyPlan(plan: any) {
  }
}
