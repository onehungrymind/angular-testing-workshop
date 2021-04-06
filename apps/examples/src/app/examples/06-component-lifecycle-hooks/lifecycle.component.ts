import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'workshop-lifecycle',
  template: '<h1>Lifecycle Hooks!</h1>'
})
export class LifecycleComponent implements OnInit, OnDestroy {
  loaded = false;
  ngOnInit() {
    this.loaded = true;
    this.initData();
  }
  ngOnDestroy() {
    this.purgeData();
  }

  initData() {}
  purgeData() {}
}
