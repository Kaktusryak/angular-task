import { Injectable,signal } from '@angular/core';
import { UserInterface } from '../interfaces/user-interface';



@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  constructor() { }
  currentUserSignal = signal<UserInterface | null | undefined>(undefined)
}
