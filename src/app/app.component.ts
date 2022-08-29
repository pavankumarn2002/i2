import { Component } from '@angular/core';
import { ExternalService } from './external.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
  constructor(private ex: ExternalService) {
    this.ex.load(
      "http://i2frontend.orgfree.com/i2frontend/jq(Angular)/doc.js",
      "http://i2frontend.orgfree.com/i2frontend/jq(Angular)/cell.js",
      "http://i2frontend.orgfree.com/i2frontend/jq(Angular)/index.js",
      "http://i2frontend.orgfree.com/i2frontend/jq(Angular)/input.js",
      "http://i2frontend.orgfree.com/i2frontend/jq(Angular)/slide.js",
      "http://i2frontend.orgfree.com/i2frontend/jq(Angular)/tabs.js",
    )
  }

}
