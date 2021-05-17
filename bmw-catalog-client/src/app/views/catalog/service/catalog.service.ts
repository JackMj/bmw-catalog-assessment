import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { BmwCarCatalog } from '../models/catalog';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  private _apiBase = environment.apibase;

  constructor(private _http: HttpClient) {
  }

  public getCatalog(): Observable<BmwCarCatalog> {
    return this._http.get<BmwCarCatalog>(`${this._apiBase}/api/car-catalog`);
  }
}
