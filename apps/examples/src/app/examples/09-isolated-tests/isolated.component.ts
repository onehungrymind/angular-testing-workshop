import { Component } from '@angular/core';

@Component({
  selector: 'workshop-isolated',
  template: `
    <h1
      *ngFor="let headline of headlines"
      (click)="setCurrentHeadline(headline)"
      [ngClass]="{'active': isCurrentHeadline(headline)}">
      {{headline}}
    </h1>
  `,
  styles: [`.active { font-weight: bold; }`]
})
export class IsolatedComponent {
  currentHeadline = '';
  headlines = [
    'First headline',
    'Second headline',
    'Third headline'
  ];
  isCurrentHeadline(headline) {
    return headline === this.currentHeadline;
  }
  setCurrentHeadline(headline) {
    this.currentHeadline = headline;
  }
}
