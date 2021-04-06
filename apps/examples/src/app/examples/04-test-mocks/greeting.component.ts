import { Component } from '@angular/core';
import { GreetingService } from './greeting.service';

@Component({
  selector: 'workshop-greeting',
  template: '<h1>Presenting {{subject.title}}!</h1>'
})
export class GreetingComponent {
  subject = this.service.getSubject();
  constructor(private service: GreetingService) { }
}
