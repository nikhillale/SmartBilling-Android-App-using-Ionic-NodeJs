import { Component, OnInit } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { Platform, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import { File} from '@ionic-native/file/ngx';
import { ToastController } from '@ionic/angular';
import { HttpService } from 'src/app/shared/http.service';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
@Component({
  selector: 'app-generate-bill',
  templateUrl: './generate-bill.page.html',
  styleUrls: ['./generate-bill.page.scss'],
})
export class GenerateBillPage implements OnInit {
  constructor(private http: HttpService,
              private file : File,
              private router: Router,  
              public navCtrl: NavController , 
              private plt: Platform,
              private emailComposer: EmailComposer,
              private toastController: ToastController) { }
  pdfObj = null;
  items;
  data: any;
  info;
  invNo;
  billNo;
  letterObj = {
    name: '',
    address: '',
    contact: '',
    email: ''
  }
  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    this.items = navigation.extras.state as {
    name: string,
    brand: boolean,
    price: number,
  };
    console.log(this.items);
    const email = localStorage.getItem('email');
    this.http.getUser(email).subscribe(res => {
      this.info = res;
    });
  }
  // tslint:disable-next-line: member-ordering
  async createPdf() {
    const email = localStorage.getItem('email');
    const str = this.info.name.substring(0, 2).toUpperCase();
    const inputData = new FormData();
    inputData.append('customer', JSON.stringify(this.letterObj));
    inputData.append('productDetails', JSON.stringify(this.items));
    inputData.append('invoiceNo', str);
    inputData.append('email', email);
    await this.http. invoiceDetails(inputData,email).subscribe((res) => {
      console.log(res);
      this.generateBill(res.result);
    });
  }
  generateBill(invoiceNo) {
  this.billNo = invoiceNo;
  const docDefinition = {
      content: [
        { text: 'INVOICE', style: 'header'},
        { text: new Date().toDateString(), alignment: 'right'},
        { text: 'Invoice Number :' + invoiceNo },

        { text: 'From', style: 'subheader'},
        { text: this.info.name },
        { text: this.info.streat},
        { text: this.info.city},

        { text: 'To', style: 'subheader'},
        { text: this.letterObj.name},
        { text: this.letterObj.address},
        { text: this.letterObj.contact},
        { text: this.letterObj.email},

        { text: 'Items', style: 'subheader'},
        {
            style: 'itemsTable',
            table: {
                widths: ['*', 75, 75],
                body: [
                    [
                        { text: 'Mobile Name', style: 'itemsTableHeader' },
                        { text: ' Brand', style: 'itemsTableHeader' },
                        { text: 'Price', style: 'itemsTableHeader' },
                    ],
                    [this.items.brand , this.items.name, this.items.price]
                ]
            }
        },
        {
            style: 'totalsTable',
            table: {
                widths: ['*', 75, 75],
                body: [
                    [
                        '',
                        'Subtotal',
                        this.items.price,
                    ],
                    [
                        '',
                        'Total',
                        this.items.price,
                    ]
                ]
            },
            layout: 'noBorders'
        },
        {text: 'This is computer generated invoice no signature required.'},
    ],
      styles: {
      header: {
          fontSize: 20,
          bold: true,
          margin: [0, 0, 0, 10],
          alignment: 'right'
      },
      subheader: {
          fontSize: 16,
          bold: true,
          margin: [0, 20, 0, 5]
      },
      itemsTable: {
          margin: [0, 5, 0, 15]
      },
      itemsTableHeader: {
          bold: true,
          fontSize: 13,
          color: 'black'
      },
      totalsTable: {
          bold: true,
          margin: [0, 30, 0, 0]
      }
  },
  }
  this.pdfObj = pdfMake.createPdf(docDefinition);
  this.presentAlertMultipleButtons();
  }

  async presentAlertMultipleButtons() {
    const alertcntrl = await this.toastController.create({
      message: 'Invoice created success.',
      duration: 2000,
      position: 'bottom',
    });

    await alertcntrl.present();
  }

  async downloadPdf(){
    if (this.plt.is('android')) {
  const fileName = 'invoice'+ this.billNo +'.pdf';
  this.pdfObj.getBuffer((buffer) => {
    let blob = new Blob([buffer], { type: 'application/pdf' });
    // Save the PDF to the data Directory of our App
    this.file.writeFile(this.file.externalApplicationStorageDirectory,fileName, blob, { replace: false });
    const email = {
      to: this.letterObj.email,
      attachments: [this.file.externalApplicationStorageDirectory+fileName],
      subject: 'Invoice',
      body: `<h3>Dear ${this.letterObj.name} <h3> <br>
              <p>Please find your attached invoice<p>
              <p>Invoice Number :${this.billNo}<br>
              <p>Date : ${new Date().toDateString()}<br>
              <p>Thank You..!<p><br>
              <p>Visit Again`,
      isHtml: true
    }
    this.emailComposer.open(email);
    this.router.navigate(['../home']);
  });
  } else {
    // for a browser
    this.pdfObj.download();
  }
}
}
