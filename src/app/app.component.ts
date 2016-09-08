import {Component, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
  sub: any;

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
