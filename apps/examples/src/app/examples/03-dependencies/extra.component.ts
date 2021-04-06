import { Component } from '@angular/core';
import { ExtraService } from './extra.service';

@Component({
  selector: 'workshop-extra',
  templateUrl: './extra.component.html'
})
export class ExtraComponent {
  subject = 'world';

  constructor(private extraService: ExtraService) {}

  getExtra() {
    this.extraService.getExtra();
  }
}
