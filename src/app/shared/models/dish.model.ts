import { Cusines } from './cusines.model';
import { ResSer } from './res_ser.mode';

export class Dish {
    public dishId: number;
    public dishName: string;
    public foodCategory: number;
    public ImageUrl?: string;
    public description: string;
    public cusines: string[];
    public restricted_ser: string[];
    public cost: number;

}

export class DishModel {
    public id: number;
    public Category_Type: number; // nonveg-2 or veg-1
    public Dish_Name: string;
    public Description: string;
    public Logo?: string;
    public Menu_Type: number; // menu
    public Cuisine: string ;
    public Restrictions: string ;
    public Price: number;
    public is_active: number; // active-1  non active -0
}
