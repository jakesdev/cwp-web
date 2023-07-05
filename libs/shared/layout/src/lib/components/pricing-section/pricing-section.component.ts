import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MarketPlaceService, NotificationService, TransactionService } from '@cwp/core/services';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'cwp-pricing-section',
  templateUrl: './pricing-section.component.html',
  styleUrls: ['./pricing-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricingSectionComponent implements OnInit {
  constructor(private marketService: MarketPlaceService, private transactionService: TransactionService,
    private notificationService: NotificationService,
  ) {}

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
    this.transactionService.createPayment(plan).subscribe({
      next: (res) => {
        window.location.href = res.data;
      },
      error: (err) => {
        this.notificationService.error(err.message);
      },
    }
    );
  }
}
