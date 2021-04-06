import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { InputOutputComponent } from './input-output.component';

describe('InputOutputComponent', () => {
  let component: InputOutputComponent;
  let fixture: ComponentFixture<InputOutputComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputOutputComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputOutputComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    component.subject = 'galaxy';
    fixture.detectChanges();
  });

  it('should have `subject` as an @Input', () => {
    expect(component.subject).toBe('galaxy');
  });

  it('should render the @Input `subject`', () => {
    const h1 = de.query(By.css('h1'));
    expect(h1.nativeElement.textContent).toBe('Hello galaxy!');
  });

  it('should emit the proper message on depart', () => {
    const button = de.query(By.css('button'));
    let farewell;
    component.leave.subscribe((event) => (farewell = event));

    button.triggerEventHandler('click', null);

    expect(farewell).toBe('Ciao galaxy!');
  });
});
