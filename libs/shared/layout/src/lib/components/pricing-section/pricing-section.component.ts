import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MarketPlaceService, TransactionService } from '@cwp/core/services';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'cwp-pricing-section',
  templateUrl: './pricing-section.component.html',
  styleUrls: ['./pricing-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricingSectionComponent implements OnInit {
  constructor(private marketService: MarketPlaceService, private transactionService: TransactionService) {}

  plans: any[] = [];
  popularPlan$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  ngOnInit(): void {
    this.getPlans();
  }

  getPlans() {
    this.marketService.getPlans().subscribe((res) => {
      this.plans = res.data;
      if (this.plans.length > 0) {
        this.popularPlan$.next(this.plans[0]);
      }
    });
  }

  buyPlan(plan: any) {
    this.transactionService.createPayment(plan).subscribe((res) => {
      // open new tab
      window.open(res.data, '_blank');
    });
  }
}
