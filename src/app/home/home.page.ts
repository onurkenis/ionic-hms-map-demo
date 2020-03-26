import { Component } from '@angular/core';
declare var HWMapJsSDK: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  map: any;
  marker: any;

  constructor() {}

  showMap() {
    const mapOptions: any = {};
    mapOptions.center = { lat: 48.856613, lng: 2.352222 };
    mapOptions.zoom = 8;
    mapOptions.language = 'ENG';
    this.map = new HWMapJsSDK.HWMap(document.getElementById('map'), mapOptions);
  }

  addMarker() {
    this.marker = new HWMapJsSDK.HWMarker({
      map: this.map,
      position: { lat: 48.85, lng: 2.35 },
      label: 'A',
      icon: {
        opacity: 0.5
      }
    });
  }

}
