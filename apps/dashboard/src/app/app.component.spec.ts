import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { UiToolbarModule } from '@workshop/ui-toolbar';
import { MaterialModule } from '@workshop/material';

import { AppComponent, SidenavStatus } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        HttpClientTestingModule,
        UiToolbarModule,
        MaterialModule,
        RouterTestingModule,
        NoopAnimationsModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  describe('should toggle sidenavStatus on toolbar event-toggleSidenav', () => {
    it('to closed, assumed open on init', () => {
      component.toggleSidenav();

      expect(component.sidenavStatus).toBe(SidenavStatus.CLOSED);
    });

    it('to open, set to closed on start', () => {
      component.sidenavStatus = SidenavStatus.CLOSED;

      component.toggleSidenav();

      expect(component.sidenavStatus).toBe(SidenavStatus.OPENED);
    });
  });
});
