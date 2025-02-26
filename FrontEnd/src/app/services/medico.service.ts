import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Medico } from '../interfaces/Medico';
import { throwError, catchError, map, Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class MedicoService {
  private url:string='http://localhost:3001/api/';
 
  httpHeaders = new HttpHeaders().set('Content-type','aplication/json');

  constructor(private httpClient:HttpClient) { }

    getMedicos(){
     
      return  this.httpClient.get(this.url+"Medicos",{headers:this.httpHeaders});
  
    }
  
    createMedico(medico: Medico): Observable<Medico> {
      return this.httpClient.post<Medico>(this.url + "Medico", medico, { headers: this.httpHeaders })
        .pipe(
          catchError(err => {
            console.error('Error', err);
            return throwError(err);
          })
        );
  

      }}

