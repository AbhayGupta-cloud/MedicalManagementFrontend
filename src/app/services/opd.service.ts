import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class OpdService {

  constructor(private _http:HttpClient) { }
  public opd(){
    return this._http.get(`${baseUrl}/opdSchedule/`);
  }
  //add opdSchedule
  public addOpdSchedule(opd){
   return this._http.post(`${baseUrl}/opdSchedule/`,opd);
  }
}
