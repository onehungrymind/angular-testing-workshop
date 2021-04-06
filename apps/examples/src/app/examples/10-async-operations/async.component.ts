import { Component } from '@angular/core';
import { AsyncService } from './async.service';

@Component({
  selector: 'workshop-async',
  template: '<h1>Async Operations Tests!</h1>',
})
export class AsyncComponent {
  result = '';
  min = 0;
  max = 10;

  constructor(private service: AsyncService) {}

add(a, b) {
  this.service.asyncAdd(a, b).then((result) => {
    this.result = this.checkThreshold(result, this.min, this.max);
  });
}

subtract(a, b) {
  this.service.asyncSubtract(a, b).then((result) => {
    this.result = this.checkThreshold(result, this.min, this.max);
  });
}

checkThreshold(result, min, max) {
  return result < min // is result less than min
    ? min // if so, return min
    : result > max // if not, is it greater than max
    ? max // if so, return max
    : result; // if not, return result
}
}
