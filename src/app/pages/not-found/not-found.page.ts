import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.scss'],
})
export class NotFoundPage implements OnInit {

    public url: string;

  constructor(private route: ActivatedRoute) {

      console.log('url: ' + this.route.url);
      console.log(this.route.url);
      console.log('pathFromRoot' + this.route.pathFromRoot);
      console.log(this.route.pathFromRoot);
      console.log('snapshot.url' + this.route.snapshot.url);
      console.log(this.route.snapshot.url);
      console.log('window.location.href');
      console.log(window.location.href);

      this.url = window.location.href;
  }

  ngOnInit() {
  }

    ionViewDidEnter() {
        console.log('ionViewDidLoad NotFoundPageModule' + this.url);
    }

    ionViewWillEnter() {
        console.log('ionViewWillEnter NotFoundPageModule' + this.url);
    }

}
