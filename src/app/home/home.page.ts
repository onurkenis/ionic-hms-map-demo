import { Component } from '@angular/core';
declare var HWMapJsSDK: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  map: any;
  constructor() {}

  showMap() {
    const mapOptions: any = {};
    mapOptions.center = { lat: 48.856613, lng: 2.352222 };
    mapOptions.zoom = 8;
    mapOptions.language = 'ENG';
    this.map = new HWMapJsSDK.HWMap(document.getElementById('map'), mapOptions);
  }

}
