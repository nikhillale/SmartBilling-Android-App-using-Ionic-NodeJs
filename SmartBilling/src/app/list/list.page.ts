import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/http.service';
@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  product = [];
  constructor(private http: HttpService) {
  }
  ngOnInit() {
    let email= localStorage.getItem('email')
    this.http.getProduct(email).subscribe(response => {
      this.product = response[0].product;
      console.log(response);
    });
  }
}
