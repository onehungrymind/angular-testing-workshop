import { Injectable } from '@angular/core';

@Injectable()
export class GreetingService {
  private subject = {
    title: 'Super Serious Service',
    description: 'It is good to be me!'
  };
  getSubject() { return this.subject; }
  updateTitle(title) { this.subject.title = title; }
}
