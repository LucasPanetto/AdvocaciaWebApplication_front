import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../modules/auth';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GenericService {
  constructor(private http: HttpClient) {
  }

  post(object: Object, api: any, route: string): Observable<any> {
    if (!object) {
      throw new Error('Objeto invál');
    }

    return this.http.post<UserModel>(api, object);
  }

}
