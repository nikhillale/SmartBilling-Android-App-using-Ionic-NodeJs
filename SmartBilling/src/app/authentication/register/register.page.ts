import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpService } from 'src/app/shared/http.service';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  regForm: FormGroup;
  message: false;
  dis: boolean=true;
  dis2: boolean=false;
  login='Verify OTP'
  constructor(
    public active: ActivatedRoute,
    private fb: FormBuilder, 
    private http: HttpService,
    private router: Router,
    private toastController: ToastController) { }
  ngOnInit() {
    this.regForm = this.fb.group({
      conformPass: [''],
      password : [''],
      OTP:['']
    });
  }
  onVerify(){
    let otp = this.active.snapshot.paramMap.get('otp');
    console.log(otp);
    let checkOTP = this.regForm.get('OTP').value;
    if (checkOTP === otp) {
      this.login='Reset Password'
      this.dis=false;
      this.dis2 = true;
      this.verificationToast();
    } else {
      this.wrongOtpToast()
    }
  }
  async verificationToast() {
    const alertcntrl = await this.toastController.create({
      message: 'Verified Successfully.Reset Password',
      duration: 2000,
      position: 'bottom',
    });

    await alertcntrl.present();
  }
  async wrongOtpToast() {
    const alertcntrl = await this.toastController.create({
      message: 'Please enter Correct OTP.',
      duration: 2000,
      position: 'bottom',
    });

    await alertcntrl.present();
  }

  onSubmit(){
    const password = this.regForm.get('password').value;
    const confPass= this.regForm.get('conformPass').value;
    if(password !== confPass){
      this.wrongPassToast();
    } else {
      const email = localStorage.getItem('email');
      const inputdata = new FormData();
      inputdata.append('password', confPass);
      inputdata.append('email',email);

      this.http.resetPass(inputdata).subscribe(res=>{
        localStorage.removeItem('email');
        this.router.navigate(['../login']);
      });
    } 
  }

  async paswordToast() {
    const alertcntrl = await this.toastController.create({
      message: 'Password Reset Successfully.Please login',
      duration: 2000,
      position: 'bottom',
    });

    await alertcntrl.present();
  }

  async wrongPassToast() {
    const alertcntrl = await this.toastController.create({
      message: 'Please Enter Correct password',
      duration: 2000,
      position: 'bottom',
    });
    await alertcntrl.present();
  }

}
