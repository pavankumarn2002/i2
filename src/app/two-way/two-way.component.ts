import { Component, OnInit } from '@angular/core';
import { ExternalService } from '../external.service';
@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.scss']
})
export class TwoWayComponent implements OnInit {

  constructor(private ex: ExternalService) {
    this.ex.load(
      "https://res.cloudinary.com/veraion9/raw/upload/v1657016121/i2/jq%28new%29/pre.js",
    )
  }
  ngOnInit(): void {

  }
  ngAfterViewInit() {
 
    this.ex.load(
      "https://res.cloudinary.com/veraion9/raw/upload/v1657016045/i2/jq%28new%29/index.js",
      "https://res.cloudinary.com/veraion9/raw/upload/v1657015996/i2/jq%28new%29/cell.js",
      "https://res.cloudinary.com/veraion9/raw/upload/v1657016090/i2/jq%28new%29/input.js",
      "https://res.cloudinary.com/veraion9/raw/upload/v1657016158/i2/jq%28new%29/slide.js",
      "https://res.cloudinary.com/veraion9/raw/upload/v1657016189/i2/jq%28new%29/tabs.js",
      "https://res.cloudinary.com/veraion9/raw/upload/v1657167602/i2/jq%28data%29/data.js"
    );
  }

}
