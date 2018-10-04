import { Component, OnInit } from '@angular/core';
import {DishService} from '../services/dish.service';
import { Dish } from '../shared/dish' ;
import { DISHES} from '../shared/dishes' ;
import {Observable} from 'rxjs';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
 dishes:Dish[];

 selectedDish:Dish;
  constructor(private dishservice:DishService) {

   }

  ngOnInit() {
    // this.dishes = DISHES;
    this.dishservice.getDishes().subscribe(data=> {this.dishes=data ;});
        this.selectedDish = DISHES[0] ;//this.dishes[0];
    }
onselect(dish:Dish) { this.selectedDish=dish ;}

savem(){ this.dishservice.savedishes(this.dishes) ; }
}
