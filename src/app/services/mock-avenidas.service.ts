import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {IAvenidas} from '../interfaces/avenidas'

@Injectable({
  providedIn: 'root',
})
export class MockAvenidasService {
  
  constructor(private http: HttpClient) {}
  private avenidasUrl = 'api/avenidas'; // URL to web api

  getAvenidas(): Observable<IAvenidas[]> {
    return this.http.get<IAvenidas[]>(this.avenidasUrl);
  }
}
