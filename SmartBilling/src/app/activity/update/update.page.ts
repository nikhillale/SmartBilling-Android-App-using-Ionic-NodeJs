import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/shared/http.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
  constructor(private alert: AlertController,
              private toastController: ToastController,
              private active: ActivatedRoute,
              private http: HttpService,
              private fb: FormBuilder,
              private router: Router) { }
  patchData: any;
  updateForm: FormGroup;
  ngOnInit() {
    this.updateForm = this.fb.group({
      name: [''],
      brand: [''],
      price: [''],
      ram: [''],
      rom: [''],
    });
    this.patchDataToFields();
  }
  patchDataToFields(){
    const id = this.active.snapshot.paramMap.get('id');
    this.http.getDataById(id).subscribe(response => {
      this.patchData = response;
      console.log(this.patchData);
      this.updateForm.patchValue({
        name : this.patchData.name,
        brand : this.patchData.brand,
        price: this.patchData.price,
        ram : this.patchData.ram,
        rom : this.patchData.rom
      });
    });
  }
  onUpdate(){
    const name = this.updateForm.get('name').value;
    const brand = this.updateForm.get('brand').value;
    const price = this.updateForm.get('price').value;
    const ram = this.updateForm.get('ram').value;
    const rom = this.updateForm.get('rom').value;

    const inputdata = new FormData();
    inputdata.append('name', name);
    inputdata.append('brand', brand);
    inputdata.append('price', price);
    inputdata.append('ram', ram);
    inputdata.append('rom', rom);

    this.http.updateData(inputdata, this.patchData._id).subscribe(response => {
     this.presentAlertMultipleButtons();
    });
  }

  async presentAlertMultipleButtons() {
    const alertcntrl = await this.alert.create({
      header : 'Update.',
      message: 'Are you sure...! ',
      buttons: [ {
        text: 'Yes',
        cssClass: 'secondary',
        handler: () => {
          this.router.navigate(['../home']);
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
      message: 'Added Failed.',
      duration: 2000,
      position: 'middle',
    });

    await alertcntrl.present();
  }
}
