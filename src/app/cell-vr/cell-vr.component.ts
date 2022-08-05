import { Component, OnInit } from '@angular/core';
import { ExternalService } from '../external.service';
@Component({
  selector: 'app-cell-vr',
  templateUrl: './cell-vr.component.html',
  styleUrls: ['./cell-vr.component.scss']
})
export class Vr implements OnInit {

  constructor(private ex: ExternalService) {
    this.ex.load(
      "https://res.cloudinary.com/veraion9/raw/upload/v1659201837/i2/jq%28dynamic%29/pre.js",
    )
  }
  ngOnInit(): void {

  }
  ngAfterViewInit() {
 
    this.ex.load(
      "https://res.cloudinary.com/veraion9/raw/upload/v1658938994/i2/jq%28dynamic%29/doc.js",
      "https://res.cloudinary.com/veraion9/raw/upload/v1658908893/i2/jq%28dynamic%29/cell.js",
      "https://res.cloudinary.com/veraion9/raw/upload/v1658938953/i2/jq%28dynamic%29/index.js",
      "https://res.cloudinary.com/veraion9/raw/upload/v1658909046/i2/jq%28dynamic%29/input.js",
      "https://res.cloudinary.com/veraion9/raw/upload/v1658912742/i2/jq%28dynamic%29/slide.js",
      "https://res.cloudinary.com/veraion9/raw/upload/v1658942369/i2/jq%28dynamic%29/tabs.js",
      "https://res.cloudinary.com/veraion9/raw/upload/v1659683791/data.js",
    );
  }

}
