import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/client.model';


@Injectable({
  providedIn: 'root'
})
export class ClientService {
  apiUrl = 'http://localhost:8080/api/client';
  httpOptions = {
    headers: new HttpHeaders ({
      'Content-Type' : 'application/json'
    })
    };
  

  constructor(
    private httpClient : HttpClient
  ) {}
  
  public postClient(client : any) : Observable<Client> {
    return this.httpClient.post<any>(this.apiUrl, client,this.httpOptions);
    console.info()
  }
}


 

