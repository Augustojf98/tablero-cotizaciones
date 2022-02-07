import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  saveLocal(key: string, data: any){
    localStorage.setItem(key, JSON.stringify(data));
  }

  getLocal(key: string){
    return JSON.parse(localStorage.getItem(key));
  }

  clearLocal(){
    localStorage.clear();
  }

  removeLocal(key: string){
    localStorage.removeItem(key);
  }

  saveSession(key: string, data: any){
    sessionStorage.setItem(key, JSON.stringify(data));
  }

  getSession(key: string){
    return JSON.parse(sessionStorage.getItem(key));
  }

  clearSession(){
    sessionStorage.clear();
  }

  removeSession(key: string){
    sessionStorage.removeItem(key);
  }
}
