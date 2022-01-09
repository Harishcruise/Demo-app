import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient) {

   }

   getData():Observable<any>{
     return this.http.get('https://61db0b2f4593510017aff7c1.mockapi.io/api/demo/v11/Demo');
   }
   postData(data:any):Observable<any>{
     return this.http.post('https://61db0b2f4593510017aff7c1.mockapi.io/api/demo/v11/Demo/',data)
   }
}
