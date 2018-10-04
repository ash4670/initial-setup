import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private htp: HttpClient) { }

  getDishes():Observable<Dish[]>{
    console.log('gitdishes called');

    //return this.htp.get<Dish[]>('https://localhost:44336/api/values');
    return this.htp.get<Dish[]>('https://localhost:44336/api/values');

  }

  savedishes(dd: Dish[]) {
    console.log(dd);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };


    //debugger ;
    this.htp.post('https://localhost:44336/api/values', dd).subscribe((err) => { console.log(err); });


  }
}
