import { Cusines } from "./cusines.model";
import { ResSer } from "./res_ser.mode";

export class Dish {
    public dishId: number;
    public dishName: string;
    public foodCategory: number;
    public ImageUrl?:string;
    public description: string;
    public cusines : string[];
    public restricted_ser:string[];
    public cost: number

}