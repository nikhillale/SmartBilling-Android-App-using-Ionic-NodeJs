import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
 
  constructor(private http: HttpClient){ 
  }
  loginUser(loginData) {

    const url = 'http://192.168.0.131:3000/billing/login/';
    return this.http.post<any>(url, loginData);
  }
  addProduct( productData){
    const url = 'http://192.168.0.131:3000/billing/add/';
    return this.http.post<any>(url, productData);
  }

  getProduct(email){
    const url = 'http://192.168.0.131:3000/billing/allProduct/'+email;
    return this.http.get<any>(url);
  }

  deleteProduct(deleteId){
    const url = 'http://192.168.0.131:3000/billing/delete/'+deleteId;
    return this.http.delete<any>(url);
  }

  getDataById(id){
    const url = 'http://192.168.0.131:3000/billing/getDataById/'+id;
    return this.http.get<any>(url);
  }
  getDataByName(item){
    const url = 'http://192.168.0.131:3000/billing/getDataByName/'+item;
    return this.http.get<any>(url);
  }

  updateData(inputData,id){
    const url = 'http://192.168.0.131:3000/billing/update/'+id;
    return this.http.patch<any>(url,inputData);
  }

  registerUser(inputData){
    const url = 'http://192.168.0.131:3000/billing/register';
    return this.http.post<any>(url,inputData);
  }

  getUser(email){
    const url = 'http://192.168.0.131:3000/billing/userData/'+email;
    return this.http.get<any>(url);
  }

  invoiceDetails(inputData,email){
    console.log(email);
    const url = 'http://192.168.0.131:3000/billing/invoiceData/'+email;
    return this.http.post<any>(url,inputData);
  }

  allInvoice(email){
    const url = 'http://192.168.0.131:3000/billing/allInvoice/'+email;
    return this.http.get<any>(url);
  }
  reset(data){
    const url = 'http://192.168.0.131:3000/billing/resetPass/';
    return this.http.post<any>(url,data);
  }

  resetPass(data){
    const url = 'http://192.168.0.131:3000/billing/reset/';
    return this.http.post<any>(url,data);
  }
}
