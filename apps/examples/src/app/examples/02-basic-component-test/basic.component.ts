import { Component } from '@angular/core';

@Component({
  selector: 'workshop-simple',
  template: '<h1>Hello {{subject}}!</h1>'
})
export class BasicComponent {
  subject = 'world';
}
