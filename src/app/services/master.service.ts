import { Injectable } from '@angular/core';
import { Menu } from '../shared/models/menu.mode';
import { Dish } from '../shared/models/dish.model';


@Injectable()
export class MasterService {


	currentSection = 'home';
	searchmenu_selection = "all";
	alldishes: Menu[] = [];

	startersArr: Dish[] = [
		{
			dishId: 1,
			dishName: "upma",
			foodCategory:1,
			ImageUrl: "../../assets/images/food.jpg",
			description: "Caterbinge is an on-demand food catering service and your personal chef",
			cusines: { count: 2, cusines_type: ['hyderabadi'] },
			restricted_ser: { count: 0, rs_arr: [] },
			cost: 50
		},
		{
			dishId: 2,
			dishName: "panipuri",
			foodCategory:1,
			ImageUrl: "",
			description: "Caterbinge is an on-demand food catering service and your personal chef for party orders. We aim to provide superior quality food by allocating best-experienced chefs around the city to master the taste of every single dish of your custom built menu",
			cusines: { count: 2, cusines_type: ['hyderabadi'] },
			restricted_ser: { count: 2, rs_arr: ['hyderabadi'] },
			cost: 30
		},
		{
			dishId: 3,
			dishName: "paysam",foodCategory:2,
			ImageUrl: "",
			description: "Caterbinge is an on-demand food catering service and your personal chef for party orders. We aim to provide superior quality food by allocating best-experienced chefs around the city to master the taste of every single dish of your custom built menu",
			cusines: { count: 2, cusines_type: ['hyderabadi'] },
			restricted_ser: { count: 2, rs_arr: ['hyderabadi'] },
			cost: 100
		},
		{
			dishId: 4,
			dishName: "purnalu",foodCategory:1,
			ImageUrl: "../../assets/images/food.jpg",
			description: "Caterbinge is an on-demand food catering service and your personal chef for party orders. We aim to provide superior quality food by allocating best-experienced chefs around the city to master the taste of every single dish of your custom built menu",
			cusines: { count: 0, cusines_type: [] },
			restricted_ser: { count: 0, rs_arr: [] },
			cost:60
		},
	];

	Best: Dish[] = [
		{
			dishId: 5,
			dishName: "Biryani",
			foodCategory:2,
			ImageUrl: "../../assets/images/food.jpg",
			description: "Caterbinge is an on-demand food catering service and your personal chef",
			cusines: { count: 2, cusines_type: ['hyderabadi','rayala semma'] },
			restricted_ser: { count: 0, rs_arr: [] },
			cost: 250
		},
		{
			dishId: 6,
			dishName: "chicken marag",
			foodCategory:2,
			ImageUrl: "",
			description: "Caterbinge is an on-demand food catering service and your personal chef for party orders. We aim to provide superior quality food by allocating best-experienced chefs around the city to master the taste of every single dish of your custom built menu",
			cusines: { count: 1, cusines_type: ['hyderabadi'] },
			restricted_ser: { count: 0, rs_arr: [] },
			cost: 300
		},
		{
			dishId: 7,
			dishName: "prawns",foodCategory:2,
			ImageUrl: "",
			description: "Caterbinge is an on-demand food catering service and your personal chef for party orders. We aim to provide superior quality food by allocating best-experienced chefs around the city to master the taste of every single dish of your custom built menu",
			cusines: { count: 0, cusines_type: [] },
			restricted_ser: { count: 0, rs_arr: [] },
			cost: 100
		},
	];

	maincourse: Dish[] = [
		{
			dishId: 8,
			dishName: "pulav",
			foodCategory:1,
			ImageUrl: "../../assets/images/food.jpg",
			description: "Caterbinge is an on-demand food catering service and your personal chef",
			cusines: { count: 0, cusines_type: [] },
			restricted_ser: { count: 0, rs_arr: [] },
			cost: 50
		},
		{
			dishId: 9,
			dishName: "chciken biryani",
			foodCategory:2,
			ImageUrl: "",
			description: "Caterbinge is an on-demand food catering service and your personal chef for party orders. We aim to provide superior quality food by allocating best-experienced chefs around the city to master the taste of every single dish of your custom built menu",
			cusines: { count: 2, cusines_type: ['hyderabadi'] },
			restricted_ser: { count: 0, rs_arr: [] },
			cost: 30
		},
		{
			dishId: 10,
			dishName: "paysam",foodCategory:1,
			ImageUrl: "",
			description: "Caterbinge is an on-demand food catering service and your personal chef for party orders. We aim to provide superior quality food by allocating best-experienced chefs around the city to master the taste of every single dish of your custom built menu",
			cusines: { count: 0, cusines_type: [] },
			restricted_ser: { count: 1, rs_arr: ['veg only'] },
			cost: 100
		},
		{
			dishId: 11,
			dishName: "",foodCategory:2,
			ImageUrl: "../../assets/images/food.jpg",
			description: "Caterbinge is an on-demand food catering service and your personal chef for party orders. We aim to provide superior quality food by allocating best-experienced chefs around the city to master the taste of every single dish of your custom built menu",
			cusines: { count: 2, cusines_type: ['hyderabadi'] },
			restricted_ser: { count: 2, rs_arr: ['hyderabadi'] },
			cost:500
		},
	];

	beverges: Dish[] = [];


	selectedDishes:Dish[] = [];


	constructor() {
		console.log(this.alldishes);
		this.alldishes = [
			{ dishTypeId: 1, dishType: "Best", dishes: this.Best },
			{ dishTypeId: 2, dishType: "starrters", dishes: this.startersArr },
			{ dishTypeId: 3, dishType: "maincourse", dishes: this.maincourse },
			{ dishTypeId: 4, dishType: "Biryani", dishes: [] },
			{ dishTypeId: 5, dishType: "beverges", dishes: this.beverges }
		];
	}

}

export interface searchModel {
	location: string;
	serviceType: string;
	vegAttnd: number;
	nonVegAttnd: number;
	datetime: Date;

	// constructor(){
	//   this.location = "";
	//   this.serviceType="";
	//   this.vegAttnd = 0;
	//   this.nonVegAttnd = 0;
	//   this.date= new Date();
	//   this.time=""
	// }
};
