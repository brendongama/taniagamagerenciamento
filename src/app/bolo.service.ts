import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBolo } from './IBolo';
import { API_PATH } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BoloService {

  constructor(private httpClient: HttpClient) { }

  obterTodos(): Observable<IBolo[]> {
    const url = `${API_PATH}bolo`;
    return this.httpClient.get<IBolo[]>(url);
  }

  update(bolo: IBolo):Observable<IBolo> {
    const url = `${API_PATH}bolo/${bolo.id}`;
    return this.httpClient.put<IBolo>(url, bolo);
  }

  save(bolo: IBolo):Observable<IBolo> {
    const url = `${API_PATH}bolo`;
    return this.httpClient.post<IBolo>(url, bolo);
  }

  findById(id : any):Observable<IBolo>{
    const url = `${API_PATH}bolo/${id}`;
    return this.httpClient.get<IBolo>(url);
  }
}
