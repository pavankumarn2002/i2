import {Component, ViewEncapsulation} from '@angular/core'
import { ExternalService } from '../external.service';
@Component({
  selector: 'app-Rm',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './rm.component.html',
  styleUrls: ['../app.component.css']
})
export class Rm {
  title = 'my-app';
  constructor(private ex: ExternalService) {
  }
  ngAfterViewInit() {
    this.ex.load(
      "http://i2frontend.orgfree.com/i2frontend/jq(Angular)/doc.js",
      "http://i2frontend.orgfree.com/i2frontend/jq(Angular)/cell.js",
      "http://i2frontend.orgfree.com/i2frontend/jq(Angular)/index.js",
      "http://i2frontend.orgfree.com/i2frontend/jq(Angular)/input.js",
      "http://i2frontend.orgfree.com/i2frontend/jq(Angular)/slide.js",
      "http://i2frontend.orgfree.com/i2frontend/jq(Angular)/tabs.js",
    );
  }
} 