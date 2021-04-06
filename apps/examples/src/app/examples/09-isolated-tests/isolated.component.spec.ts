import { IsolatedComponent } from './isolated.component';

describe('IsolatedComponent', () => {
  let component: IsolatedComponent;
  beforeEach(() => (component = new IsolatedComponent()));

  it('should set current headline', () => {
    const headline = 'mock headline';
    component.setCurrentHeadline(headline);
    expect(component.currentHeadline).toBe(headline);
  });

  it('should check if headline is current', () => {
    const realNews = 'Trust me, I am lying';
    const fakeNews = 'If it is on the internet, it is true';
    component.setCurrentHeadline(realNews);
    expect(component.isCurrentHeadline(fakeNews)).toBeFalsy();
  });
});
