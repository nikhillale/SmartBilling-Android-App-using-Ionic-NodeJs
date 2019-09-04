import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/http.service';
import { AlertController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.page.html',
  styleUrls: ['./delete.page.scss'],
})
export class DeletePage implements OnInit {

  // tslint:disable-next-line: max-line-length
  constructor(private router: Router, private toastController: ToastController,public menuCtrl: MenuController,private alert: AlertController,private http: HttpService) { }
  product = [];
  ngOnInit() {
    let email= localStorage.getItem('email')
    this.http.getProduct(email).subscribe(response => {
      this.product = response[0].product;
    });
  }
  onClick(deleteId){
    this.http.deleteProduct(deleteId).subscribe(response => {
      if (response) {
        this.presentAlertMultipleButtons();
      }
    }, error => {
      this.presentAlert();
    });
  }

  async presentAlertMultipleButtons() {
    const alertcntrl = await this.alert.create({
      mode:'ios',
      header :'Delete.',
      message: 'Are you sure...! ',
      buttons: [ {
        text: 'Yes',
        cssClass: 'secondary',
        handler: () => {
          this.ngOnInit()
        }
      }, {
        text: 'No',
        cssClass: 'secondary',
        handler: () => {
         this.router.navigate(['../home']);
        }
      }]
    });

    return await alertcntrl.present();
  }

  async presentAlert() {
    const alertcntrl = await this.toastController.create({
      message: 'Delete Failed.',
      duration: 2000,
      position: 'middle',
    });

    await alertcntrl.present();
  }

}
