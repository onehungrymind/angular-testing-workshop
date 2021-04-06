import { Injectable } from '@angular/core';

export enum Transactions {
  DEPOSIT = 'deposit',
  WITHDRAWAL = 'withdrawal'
}

export interface Transaction {
  type: Transactions;
  amount: number;
}

@Injectable()
export class BusinessService {
  total = 100;
  add(x) {
    this.total += x;
  }
  subtract(x) {
    this.total -= x;
  }
}
