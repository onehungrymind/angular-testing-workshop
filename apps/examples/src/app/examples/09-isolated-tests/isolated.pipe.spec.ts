import { IsolatedPipe } from './isolated.pipe';

describe('IsolatedPipe', () => {
  let pipe: IsolatedPipe;
  beforeEach(() => (pipe = new IsolatedPipe()));

  it('adds an exclamation mark to input', () => {
    const exclamation = `Super happy to be here`;
    expect(pipe.transform(exclamation)).toBe(`${exclamation}!`);
  });
});
