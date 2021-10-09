import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = {
  server: "https://rickandmortyapi.com/api"
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getCharactarsList() {
    return this.http.get(`${API.server}/character`);
  }
}
