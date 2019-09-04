import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { HttpService } from '../../shared/http.service';
import { ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.page.html',
  styleUrls: ['./invoices.page.scss'],
})
export class InvoicesPage implements OnInit {
  invoices=[] ;
  product=[];
  customer=[];
  invoiceNo=[];
  name = 'Apple';
  constructor(
    public actionSheetController: ActionSheetController,
    private active: ActivatedRoute,
    private http: HttpService, 
    private modal: ModalController,
    private router: Router
  ) { }

  ngOnInit() {
    const email= localStorage.getItem('email');
    this.http.allInvoice(email).subscribe(res=>{
      this.invoices= res.invoice;
      console.log(this.invoices);
      for (let i = 0 ; i < this.invoices.length; i++) {
        this.customer.push(JSON.parse(this.invoices[i].customer));
        this.product.push(JSON.parse(this.invoices[i].productDetails));
        this.invoiceNo.push(this.invoices[i].invoiceNo);
      }
      console.log(this.customer);
      console.log(this.product);
      console.log(this.invoiceNo);
    }); 
  }
 async onOptions(i) {
    const actionSheet = await this.actionSheetController.create({
      header:'Invoice Details',
      buttons:[{
        text:'Customer Name : '+this.customer[i].name,
        icon: 'person'
      },{
        text :'Contact :'+this.customer[i].contact,
        icon :'contact'
      },{
        text:'Brand : '+this.product[i].brand,
        icon: 'tablet-portrait'
      },{
        text:'Modal : '+this.product[i].name,
        icon :'save'
      },{
        text:'Price : '+this.product[i].price,
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
