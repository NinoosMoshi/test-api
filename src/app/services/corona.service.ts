import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Corona } from '../common/corona';
import { Table } from '../common/table';


@Injectable({
  providedIn: 'root'
})
export class CoronaService {

  urlAll = "https://covid19-server.chrismichael.now.sh/api/v1/AllReports";

  constructor(private http: HttpClient) { }

  getTotal(): Observable<Corona[]> {
    return this.http.get<GetResponseAll>(this.urlAll).pipe(
      map(response => response.reports)
    )
  }

  getCountry(): Observable<Table[]> {
    return this.http.get<GetCountryAll>(this.urlAll).pipe(
      map(response => response.table)
    )
  }

}

interface GetResponseAll {
  reports: Corona[];
}

interface GetCountryAll {
  table: Table[];
}


