import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Beer } from 'src/app/model/model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getBeers(): Observable<Beer[]>{
    return this.http.get<Beer[]>('https://api.punkapi.com/v2/beers')
  }
}
