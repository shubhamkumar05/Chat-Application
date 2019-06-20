import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {HttpErrorResponse,HttpParams} from '@angular/common/http';

import {catchError} from 'rxjs/operators';
import {tap} from 'rxjs/operators';


import  {Observable} from 'rxjs';
import {CookieService} from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(public http:HttpClient,private Cookie:CookieService) {
    console.log("Service constructor is called");
   }

   public privateUrl='http://chatapi.edwisor.com';

   public getUserInfoFromLocalstorage=()=>{
     return JSON.parse(localStorage.getItem('userInfo'));
   }

   public setUserInfoInLocalStorage=(data)=>{
     localStorage.setItem('userInfo',JSON.stringify(data));
   }

   public signupFunction(data):Observable<any>
   {
     console.log("service signup Function called");
     const params= new HttpParams()
     .set('firstName',data.firstName)
     .set('lastName',data.lastName)
     .set('mobile',data.mobile)
     .set('email',data.email)
     .set('password',data.password)
     .set('apiKey',data.apiKey);

     return this.http.post(`${this.privateUrl}/api/v1/users/signup`,params);
   }

   public signinFunction(data): Observable <any>{
     console.log("signin function is called from service");
     const params=new HttpParams()
     .set('email',data.email)
     .set('password',data.password);

     console.log(params);

     let myResponse=this.http.post(`${this.privateUrl}/api/v1/users/login`,params);
     console.log(myResponse);
     return myResponse;
   }

   public logout(): Observable<any> {

    const params = new HttpParams()
      .set('authToken', this.Cookie.get('authtoken'))

    return this.http.post(`${this.privateUrl}/api/v1/users/logout`, params);

  } // end logout function

  private handleError(err: HttpErrorResponse) {

    let errorMessage = '';

    if (err.error instanceof Error) {

      errorMessage = `An error occurred: ${err.error.message}`;

    } else {

      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;

    } // end condition *if

    console.error(errorMessage);

    return Observable.throw(errorMessage);

  }  // END handleError
}
