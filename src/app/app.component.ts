import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'elybora';
  showInfo: boolean = false;

  ngOnInit() {}

  toggleInfoShow() {
    this.showInfo = !this.showInfo;
    console.log(this.showInfo);
  }
}
