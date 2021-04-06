import {
  counterReducer,
  decrement,
  increment,
  reset
} from './testing.reducer';

describe('Testing Reducer', () => {
  it('should increment state', () => {
    const result = counterReducer(0, increment);
    expect(result).toEqual(1);
  });

  it('should decrement state', () => {
    const result = counterReducer(10, decrement);
    expect(result).toEqual(9);
  });

  it('should reset state', () => {
    const result = counterReducer(10, reset);
    expect(result).toEqual(0);
  })

  it('should handle an unknown action', () => {
    const action = {} as any;
    const result = counterReducer(10, action);
    expect(result).toEqual(10);
  });
});
