import { Component, OnInit } from '@angular/core';

declare var jQuery:any;

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    jQuery.getScript("../../assets/JS/custom.script.js");
  }

}
