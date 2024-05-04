import { Injectable,signal } from '@angular/core';
import { UserInterface } from '../interfaces/user-interface';



@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  constructor() { }
  

  setUser(token:string,name:string, role:string):void{
    localStorage.setItem('token',token)
    localStorage.setItem('name',name)
    localStorage.setItem('role',role)
  }
  removeUser():void{
    localStorage.removeItem('token')
    localStorage.removeItem('name')
    localStorage.removeItem('role')
  }
  getUserData(data:string):string{
    return localStorage.getItem(data) || ''
  }
  
  


  
}
