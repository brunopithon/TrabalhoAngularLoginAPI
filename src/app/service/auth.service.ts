import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  GetbyCode(id: string | null | undefined) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { 

  }
  apiurl='http://localhost:3000/usuario';

  RegisterUser(inputdata:any){
    return this.http.post(this.apiurl,inputdata)
  }
  GetUserbyCode(id:any){
    return this.http.get(this.apiurl+'/'+id);
  }
  Getall(){
    return this.http.get(this.apiurl);
  }
  updateuser(id:any,inputdata:any){
    return this.http.put(this.apiurl+'/'+id,inputdata);
  }
  getuserrole(){
    return this.http.get('http://localhost:3000/funcao');
  }
  isloggedin(){
    return sessionStorage.getItem('nomeUsuario')!=null;
  }
  getrole(){
    return sessionStorage.getItem('funcaoUsuario')!=null?sessionStorage.getItem('funcaoUsuario')?.toString():'';
  }
}
