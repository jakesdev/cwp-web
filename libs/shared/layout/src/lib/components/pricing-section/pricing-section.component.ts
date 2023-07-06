import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfileModel } from '@cwp/core/model/response';
import { AuthService, MarketPlaceService, NotificationService, TransactionService } from '@cwp/core/services';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'cwp-pricing-section',
  templateUrl: './pricing-section.component.html',
  styleUrls: ['./pricing-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricingSectionComponent implements OnInit {

  plans: any[] = [];

  userProfile!: UserProfileModel;
  popularPlan$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private marketService: MarketPlaceService, private transactionService: TransactionService,
    private notificationService: NotificationService,

    private authService: AuthService,

    private router: Router) {}

  ngOnInit(): void {
    this.userProfile = this.authService.currentUserValue?.user;
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
    if(this.userProfile){
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
    else{
      this.notificationService.error('Please login to buy plan');
      this.router.navigate(['/auth/login']);
    }
  }
}
