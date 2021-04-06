import { AsyncService } from './async.service';

describe('AsyncService', () => {
  let service: AsyncService;
  beforeEach(() => (service = new AsyncService()));

  it('should asynchronously add two numbers', () => {
    return service.asyncAdd(1, 2).then((result) => expect(result).toBe(3));
  });

  it('should asynchronously subtract two numbers', () => {
    expect(service.asyncSubtract(2, 1)).resolves.toBe(1);
  });

  it('should asynchronously multiply two numbers', async () => {
    const result = await service.asyncMultiply(2, 2);
    expect(result).toBe(4);
  });

  it('should asynchronously divide two numbers', async () => {
    await expect(service.asyncDivide(4, 2)).resolves.toBe(2);
  });
});
