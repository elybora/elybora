import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less'],
})
export class MenuComponent implements OnInit {
  title = 'elybora';
  showInfo: boolean = false;

  constructor() {}

  ngOnInit(): void {}
  toggleInfoShow() {
    this.showInfo = !this.showInfo;
    console.log(this.showInfo);
  }
}
