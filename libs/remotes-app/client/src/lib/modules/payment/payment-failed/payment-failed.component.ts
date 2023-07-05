import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cwp-payment-failed',
  templateUrl: './payment-failed.component.html',
  styleUrls: ['./payment-failed.component.css'],
})
export class PaymentFailedComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    // auto redirect to component page after 5 seconds
    setTimeout(() => {
      this.router.navigate(
        ['/account/integration-components'],
      );
    }, 5000);
  }

}
