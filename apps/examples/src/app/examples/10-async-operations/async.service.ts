import { Injectable } from '@angular/core';

@Injectable()
export class AsyncService {
  asyncAdd(a, b) {
    const result = this.add(a, b);
    return Promise.resolve(result);
  }

  asyncSubtract(a, b) {
    const result = this.substract(a, b);
    return Promise.resolve(result);
  }

  asyncMultiply(a, b) {
    const result = this.multiply(a, b);
    return Promise.resolve(result);
  }

  asyncDivide(a, b) {
    const result = this.divide(a, b);
    return Promise.resolve(result);
  }

  add(a, b) {
    return a + b;
  }

  substract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    return a / b;
  }
}
