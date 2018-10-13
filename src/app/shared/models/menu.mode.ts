import { Dish } from "./dish.model";
import { SearchModel } from "../../services/master.service";

export class Menu {
    public dishTypeId: number;
    public dishType: string;
    public dishes: Dish[];
    // public searchModel:searchModel
}