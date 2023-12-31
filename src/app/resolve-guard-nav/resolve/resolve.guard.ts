import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResolveGuard implements Resolve<any> {
  constructor(private http: HttpClient) {}

  resolve() {
    return this.http
      .get('https://jsonplaceholder.typicode.com/todos')
      .pipe(delay(2000));
  }
}
