import { Component, EventEmitter, Input, Output } from '@angular/core';

import { User } from '@workshop/api-interfaces';

@Component({
  selector: 'workshop-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent {
  currentUser: User;
  originalTitle = '';
  @Input() set user(value: User) {
    if (value) this.originalTitle = value.title;
    this.currentUser = Object.assign({}, value);
  }
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
}
