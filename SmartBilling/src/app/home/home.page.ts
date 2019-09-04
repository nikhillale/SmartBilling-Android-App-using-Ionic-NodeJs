import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { HttpService } from 'src/app/shared/http.service';
import { iterateListLike } from '@angular/core/src/change_detection/change_detection_util';
import { mapChildrenIntoArray } from '@angular/router/src/url_tree';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  product = [];
  name = 'Apple';
  count = 0;
  brandNames = [];
  constructor(
    private route: ActivatedRoute,
    private http: HttpService,
    public menuCtrl: MenuController,
    private viewModal: ModalController,
    private router: Router) {
    this.route.params.subscribe(res => {
      this.ngOnInit();
    });
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  ngOnInit() {
    let email=localStorage.getItem('email')
    this.http.getProduct(email).subscribe(response => {
     this.product = response[0].product;
     this.brandNames = this.product.filter((obj, pos, arr) => {
        return arr.map(mapObj => mapObj['brand']).indexOf(obj['brand']) === pos;
    });
    });
  }
  onClick(item) {
    console.log(item);
    this.router.navigate(['../product/' + item]);
  }
}
