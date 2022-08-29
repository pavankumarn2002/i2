import { Component, OnInit } from '@angular/core';
import { ExternalService } from '../external.service';
@Component({
  selector: 'app-cell-dt',
  templateUrl: './cell-dt.component.html',
  styleUrls: ['./cell-dt.component.scss']
})
export class Dt implements OnInit {

  constructor(private ex: ExternalService) {
  }
  ngOnInit(): void {

  }
  ngAfterViewInit() {
 
    this.ex.load(
      "http://i2frontend.orgfree.com/i2frontend/jq(Angular)/doc.js",
      "http://i2frontend.orgfree.com/i2frontend/jq(Angular)/cell.js",
      "http://i2frontend.orgfree.com/i2frontend/jq(Angular)/index.js",
      "http://i2frontend.orgfree.com/i2frontend/jq(Angular)/input.js",
      "http://i2frontend.orgfree.com/i2frontend/jq(Angular)/slide.js",
      "http://i2frontend.orgfree.com/i2frontend/jq(Angular)/tabs.js",
      "http://i2frontend.orgfree.com/i2frontend/jq(Angular)/data.js",
    );
  }

}
