import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  constructor(private http: HttpClient) { }

  private baseUrl = `${environment.baseUrl}`


  public getOne(stock: any, startDate?: any, endDate?: any) {
    return this.http.get<any>(`${this.baseUrl}/${stock}/20200101/20220101/`);
  }
  
}
