import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cwp-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.css'],
})
export class PaymentSuccessComponent implements OnInit {
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
