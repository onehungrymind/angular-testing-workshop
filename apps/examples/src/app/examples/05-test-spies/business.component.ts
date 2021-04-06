import { Component } from '@angular/core';
import { BusinessService, Transaction, Transactions } from './business.service';

@Component({
  selector: 'workshop-business',
  template: `<h2>It's Business Time!</h2>`
})
export class BusinessComponent {
  constructor(private businessService: BusinessService) {}

  save(transaction: Transaction) {
    switch(transaction.type) {
      case Transactions.DEPOSIT:
        this.add(transaction.amount);
        break;
      case Transactions.WITHDRAWAL:
        this.subtract(transaction.amount);
        break;
      default:
        // Do nothing;
    }
  }

  add(x) {
    this.businessService.add(x);
  }

  subtract(x) {
    this.businessService.subtract(x);
  }
}
