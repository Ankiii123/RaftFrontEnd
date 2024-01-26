import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public canAccessMainComponents: boolean = false;
  public isUserDeafult: boolean = true;

  constructor() { }

}
