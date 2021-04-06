import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { InputOutputComponent } from './input-output.component';

@Component({
  template: `<workshop-input-output
    [subject]="subject"
    (leave)="onLeave($event)">
  </workshop-input-output>
  `
})
class TestInputOutputHostComponent {
  subject = 'galaxy';
  farewell: string;
  onLeave(farewell: string) { this.farewell = farewell; }
}

describe('HostComponent', () => {
  let component: TestInputOutputHostComponent;
  let fixture: ComponentFixture<TestInputOutputHostComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputOutputComponent, TestInputOutputHostComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestInputOutputHostComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should render the @Input `subject`', () => {
    const h1 = de.query(By.css('h1'));
    expect(h1.nativeElement.textContent).toBe('Hello galaxy!');
  });

  it('should emit the proper message on depart', () => {
    const button = de.query(By.css('button'));
    button.triggerEventHandler('click', null);
    expect(component.farewell).toBe('Ciao galaxy!');
  });
});
