import { IsolatedService } from './isolated.service';

describe('IsolatedService', () => {
  let service: IsolatedService;
  beforeEach(() => (service = new IsolatedService()));

  it('should properly add two numbers', () => {
    const result = service.add(1, 2);
    expect(result).toBe(3);
  });

  it('should properly subtract two numbers', () => {
    const result = service.substract(2, 1);
    expect(result).toBe(1);
  });

  it('should properly multiply two numbers', () => {
    const result = service.multiply(2, 2);
    expect(result).toBe(4);
  });

  it('should properly divide two numbers', () => {
    const result = service.divide(4, 2);
    expect(result).toBe(2);
  });
});
