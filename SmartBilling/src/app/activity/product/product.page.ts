import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/shared/http.service';
import { ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  product = [];
  pro=[];
  name = 'Apple';
  constructor(
    public actionSheetController: ActionSheetController,
    private active: ActivatedRoute,
    private http: HttpService, 
    private modal: ModalController,
    private router: Router) { }

  ngOnInit() {
    const item = this.active.snapshot.paramMap.get('item');
    let email= localStorage.getItem('email')
    this.http.getProduct(email).subscribe(response => {
      this.pro = response[0].product;
      // tslint:disable-next-line: prefer-for-of
      this.pro.map(res => {
        if (res.brand === item) {
          this.product.push(res);
        }
      });
    });
  }
  onClick(item){
    console.log(item);
    const navigationExtras: NavigationExtras = {
      state: {
       name :item.name,
       brand : item.brand,
       price : item.price,
      }
    };
    
    this.router.navigate(['../generate/'], navigationExtras);
  }

  onEdit(updateId) {
    console.log(updateId);
    this.router.navigate(['../update/' +updateId]);
  }

 async onOptions(item) {
    const actionSheet = await this.actionSheetController.create({
      header:'Product Details',
      buttons:[{
        text:'Brand : '+item.brand,
        icon: 'logo-apple'
      },{
        text:'Modal : '+item.name,
        icon: 'tablet-portrait'
      },{
        text:'RAM : '+item.ram+' GB',
        icon :'save'
      },{
        text:'ROM : '+item.rom+' GB',
        icon:'disc'
      },{
        text:'Price : '+item.price,
        icon:'wallet'
      },{
        text: 'Close',
        icon: 'close',
        role: 'cancel',
      }]
    });
    await actionSheet.present();
  }

}
