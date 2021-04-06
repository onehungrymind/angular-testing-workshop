import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BusinessComponent } from './business.component';
import { BusinessService, Transactions } from './business.service';

class BusinessServiceMock {
  add(x) {}
  subtract(x) {}
};

describe('BusinessComponent', () => {
  let component: BusinessComponent;
  let fixture: ComponentFixture<BusinessComponent>;
  let de: DebugElement;
  let businessService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessComponent],
      providers: [{ provide: BusinessService, useClass: BusinessServiceMock }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();

    businessService = de.injector.get(BusinessService);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should properly call `businessService.add`', () => {
    const amount = 100;
    const spy = spyOn(businessService, 'add').and.callThrough();

    component.add(amount);

    expect(spy).toHaveBeenCalledWith(amount);
  });

  it('should properly call `businessService.subtract`', () => {
    const amount = 100;
    const spy = spyOn(businessService, 'subtract').and.callThrough();

    component.subtract(amount);

    expect(spy).toHaveBeenCalledWith(amount);
  });

  it('should call the right method on `save`', () => {
    const deposit = {
      type: Transactions.DEPOSIT,
      amount: 100
    };
    const withdrawal = {
      type: Transactions.WITHDRAWAL,
      amount: 10
    };
    const addSpy = spyOn(businessService, 'add').and.callThrough();
    const subtractSpy = spyOn(businessService, 'subtract').and.callThrough();

    component.save(deposit);
    expect(addSpy).toHaveBeenCalledWith(deposit.amount);

    component.save(withdrawal);
    expect(subtractSpy).toHaveBeenCalledWith(withdrawal.amount);
  });
});
