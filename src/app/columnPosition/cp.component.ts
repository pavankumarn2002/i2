import {Component, ViewEncapsulation} from '@angular/core'
import { ExternalService } from '../external.service';
@Component({
  selector: 'app-Cp',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './cp.component.html',
  styleUrls: ['../app.component.css']
})
export class Cp{
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