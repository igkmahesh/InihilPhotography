import { Component, OnInit } from '@angular/core';

declare var jQuery:any;

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    jQuery.getScript("../../assets/JS/custom.script.js");
  }

}
