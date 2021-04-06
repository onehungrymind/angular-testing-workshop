import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RoutedComponent } from './routed.component';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { DebugElement } from '@angular/core';

class RouterStub {
  navigateByUrl(url) {
    return url;
  }
}

class ActivatedRouteStub {
  private subject = new BehaviorSubject({ subject: 'planet' });
  params = this.subject.asObservable();
}

describe('RoutedComponent', () => {
  let component: RoutedComponent;
  let fixture: ComponentFixture<RoutedComponent>;
  let de: DebugElement;
  let router: Router;
  let activatedRoute: ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RoutedComponent],
      providers: [
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useClass: ActivatedRouteStub },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutedComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    router = de.injector.get(Router);
    activatedRoute = de.injector.get(ActivatedRoute);

    fixture.detectChanges();
  });

  it('should navigates to `/items` when `goToItems` is called', () => {
    spyOn(router, 'navigateByUrl');
    component.goToItems();
    expect(router.navigateByUrl).toHaveBeenCalledWith('/items');
  });

  it('should set the `subject` based on route params', () => {
    expect(component.subject).toBe('planet');
  });
});
