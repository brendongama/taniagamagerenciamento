import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDoce } from './IDoce';
import { API_PATH } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DoceService {

  constructor(private httpClient: HttpClient) { }

  obterTodos(): Observable<IDoce[]> {
    return this.httpClient.get<IDoce[]>(`${API_PATH}doce`);
  }

  update(doce: IDoce):Observable<IDoce> {
    const url = `${API_PATH}doce/${doce.id}`;
    return this.httpClient.put<IDoce>(url, doce);
  }

  findById(id : any):Observable<IDoce>{
    const url = `${API_PATH}doce/${id}`;
    return this.httpClient.get<IDoce>(url);
  }
}
