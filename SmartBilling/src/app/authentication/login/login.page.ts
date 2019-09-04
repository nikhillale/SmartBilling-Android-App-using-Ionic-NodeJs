import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { HttpService } from 'src/app/shared/http.service';
import {  MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // tslint:disable-next-line: max-line-length
  constructor(public menuCtrl: MenuController, private fb: FormBuilder, private http: HttpService,private router: Router, private toastController: ToastController) { }
  loginForm: FormGroup;
  message: false;
  dis: boolean=true;
  dis2: boolean=false;
  login="Login";
  set: boolean = false;
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
   }
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [''],
      password : [''],
      name:[''],
      streat:[''],
      city :[''],
      resetEmail:['']
    });
  }
  onSubmit() {
   
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
    localStorage.setItem('email',email);

    const inputdata = new FormData();
    inputdata.append('email', email);
    inputdata.append('password', password);

    this.http.loginUser(inputdata).subscribe(res => {
      localStorage.setItem('token', res.token)
      this.presentAlertMultipleButtons();
      this.router.navigate(['../home']);
    }, error => {
     this.presentAlert();
    });
  }

  async presentAlertMultipleButtons() {
    const alertcntrl = await this.toastController.create({
      message: 'Login success.',
      duration: 2000,
      color:'black',
      position: 'bottom',
    });

    await alertcntrl.present();
  }

  async presentAlert() {
    const alertcntrl = await this.toastController.create({
      message: 'Login Failed.',
      duration: 2000,
      position: 'bottom',
    });

    await alertcntrl.present();
  }

  onClick() {
      this.dis = this.dis2;
      this.dis2 = !this.dis;
      if (this.dis2) {
        this.login = 'Register';
        this.set= false;
      } else {
        this.login = 'Login';
      }
  }
  onRegister() {
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
    const name = this.loginForm.get('name').value;
    const streat = this.loginForm.get('streat').value;
    const city = this.loginForm.get('city').value;

    const inputdata = new FormData();
    inputdata.append('email', email);
    inputdata.append('password', password);
    inputdata.append('name', name);
    inputdata.append('streat', streat);
    inputdata.append('city', city);

    this.http.registerUser(inputdata).subscribe(res => {
      console.log(res);
      this.dis = true;
      this.dis2 = false;
      this.login = 'Login';
    });
  }
  onChange() {
    if (this.set == false) {
      this.set = true;
    } else {
      this.set = false;
    }
  }

  onSend(){
    const email2 = this.loginForm.get('resetEmail').value;
    let data = {
        email : email2
      };
    localStorage.setItem('email',email2);
    this.http.reset(data).subscribe((response) => {
      console.log(response);
      this.set = false;
      this.resetToast();
      this.router.navigate(['../register/'+response.OTP]);
    });
  }

  async resetToast() {
    const alertcntrl = await this.toastController.create({
      message: 'OTP Send On Registered Email.',
      duration: 2000,
      position: 'bottom',
    });

    await alertcntrl.present();
  }
}
