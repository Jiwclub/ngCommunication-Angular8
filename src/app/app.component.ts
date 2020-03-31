import { Component, ViewChild } from '@angular/core';
import { Com1Component } from './components/com1/com1.component';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngCommunication';
  version = 0;
  isProduction=false;
  account = {username: 'admin',password: '1234'};
  time1 = 0;

// เข้าถึงตัว com1
@ViewChild("com1",{static: false}) com1:Com1Component
  onClickViewChild() {
    this.com1.count = 10
  }
  constructor(public shared:SharedService){

  }

  getResult() {
    return 'Test'
  }
  onClick() {
      this.version++;
  }
  onChange1(event){
    this.time1 = event
  }
  onResetVersion() {
    this.version = 0
  }
}
