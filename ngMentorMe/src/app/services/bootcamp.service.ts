import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Bootcamp } from '../models/bootcamp';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BootcampService {

  private url = environment.baseUrl + 'api/';
  constructor(private http: HttpClient, private auth: AuthService) {}

  index() {
    return this.http.get<Bootcamp[]>(this.url + 'bootcamps').pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('userService.index():error retreiving Users' + err)
        );
      })
    );
}
}