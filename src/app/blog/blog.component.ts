import { Component, OnInit } from '@angular/core';

declare var jQuery:any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    jQuery.getScript("../../assets/JS/custom.script.js");
  }

}
