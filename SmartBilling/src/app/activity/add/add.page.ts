import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { HttpService } from 'src/app/shared/http.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  productForm: FormGroup;
  // tslint:disable-next-line: max-line-length
  constructor( public menuCtrl: MenuController,private alert: AlertController, private fb: FormBuilder, private http: HttpService,private router: Router, private toastController: ToastController) { }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
   }
  ngOnInit() {
    this.productForm = this.fb.group({
      name: [''],
      brand : [''],
      price : [''],
      ram : [''],
      rom : ['']
    });
  }

  onSubmit() {
    const email = localStorage.getItem('email');
    const name = this.productForm.get('name').value;
    const brand = this.productForm.get('brand').value;
    const price = this.productForm.get('price').value;
    const ram = this.productForm.get('ram').value;
    const rom = this.productForm.get('rom').value;

    const inputdata = new FormData();
    inputdata.append('name', name);
    inputdata.append('brand', brand);
    inputdata.append('price', price);
    inputdata.append('ram', ram);
    inputdata.append('rom', rom);
    inputdata.append('email', email);
    this.http.addProduct(inputdata).subscribe(res => {
       this.presentAlertMultipleButtons();
    }, error => {
      console.log(error);
      this.presentAlert();
    });
  }

  async presentAlertMultipleButtons() {
    const alertcntrl = await this.alert.create({
      mode:'ios',
      header :'Added success.',
      message: 'Do you want to add more',
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
      mode:'ios',
      message: 'Added Failed.',
      duration: 2000,
      position: 'middle',
    });

    await alertcntrl.present();
  }

}
