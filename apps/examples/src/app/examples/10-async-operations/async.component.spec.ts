import { DebugElement } from '@angular/core';
import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { AsyncComponent } from './async.component';
import { AsyncService } from './async.service';

describe('AsyncComponent', () => {
  let component: AsyncComponent;
  let fixture: ComponentFixture<AsyncComponent>;
  let de: DebugElement;
  let asyncService: AsyncService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AsyncComponent],
      providers: [AsyncService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();

    asyncService = de.injector.get(AsyncService);
  });

  it('should assign result if add is within threshold', async(() => {
    component.add(4, 4);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.result).toBe(8);
    });
  }));

  it('should assign max if add is greater than max', fakeAsync(() => {
    component.add(10, 20);
    fixture.detectChanges();
    tick();
    expect(component.result).toBe(component.max);
  }));

  it('should properly test min and max thresholds', () => {
    expect(component.checkThreshold(5, 1, 10)).toBe(5);
    expect(component.checkThreshold(20, 1, 10)).toBe(10);
    expect(component.checkThreshold(-10, 1, 10)).toBe(1);
  });
});
