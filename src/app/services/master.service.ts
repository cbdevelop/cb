import { Injectable } from '@angular/core';
import { Menu } from '../shared/models/menu.mode';
import { Dish } from '../shared/models/dish.model';


@Injectable()
export class MasterService {


	currentSection = 'home';
	alldishes: Menu[] = [];

	startersArr: Dish[] = [
		{
			dishId: 1,
			dishName: "panipuri",foodCategory:1,
			ImageUrl: "../../assets/images/food.jpg",
			description: "Caterbinge is an on-demand food catering service and your personal chef for party orders. We aim to provide superior quality food by allocating best-experienced chefs around the city to master the taste of every single dish of your custom built menu",
			cusines: { count: 2, cusines_type: ['hyderabadi'] },
			restricted_ser: { count: 2, rs_arr: ['hyderabadi'] },
		},
		{
			dishId: 1,
			dishName: "panipuri",foodCategory:1,
			ImageUrl: "",
			description: "Caterbinge is an on-demand food catering service and your personal chef for party orders. We aim to provide superior quality food by allocating best-experienced chefs around the city to master the taste of every single dish of your custom built menu",
			cusines: { count: 2, cusines_type: ['hyderabadi'] },
			restricted_ser: { count: 2, rs_arr: ['hyderabadi'] },
		},
		{
			dishId: 1,
			dishName: "panipuri",foodCategory:2,
			ImageUrl: "",
			description: "Caterbinge is an on-demand food catering service and your personal chef for party orders. We aim to provide superior quality food by allocating best-experienced chefs around the city to master the taste of every single dish of your custom built menu",
			cusines: { count: 2, cusines_type: ['hyderabadi'] },
			restricted_ser: { count: 2, rs_arr: ['hyderabadi'] },
		},
		{
			dishId: 1,
			dishName: "panipuri",foodCategory:1,
			ImageUrl: "../../assets/images/food.jpg",
			description: "Caterbinge is an on-demand food catering service and your personal chef for party orders. We aim to provide superior quality food by allocating best-experienced chefs around the city to master the taste of every single dish of your custom built menu",
			cusines: { count: 2, cusines_type: ['hyderabadi'] },
			restricted_ser: { count: 2, rs_arr: ['hyderabadi'] },
		},
	];

	tiffins: Dish[] = [
		{
			dishId: 1,
			dishName: "panipuri",foodCategory:1,
			ImageUrl: "../../assets/images/food.jpg",
			description: "Caterbinge is an on-demand food catering service and your personal chef for party orders. We aim to provide superior quality food by allocating best-experienced chefs around the city to master the taste of every single dish of your custom built menu",
			cusines: { count: 2, cusines_type: ['hyderabadi'] },
			restricted_ser: { count: 2, rs_arr: ['hyderabadi'] },
		},
		{
			dishId: 1,
			dishName: "panipuri",foodCategory:1,
			ImageUrl: "",
			description: "Caterbinge is an on-demand food catering service and your personal chef for party orders. We aim to provide superior quality food by allocating best-experienced chefs around the city to master the taste of every single dish of your custom built menu",
			cusines: { count: 2, cusines_type: ['hyderabadi'] },
			restricted_ser: { count: 2, rs_arr: ['hyderabadi'] },
		},
		{
			dishId: 1,
			dishName: "panipuri",foodCategory:1,
			ImageUrl: "",
			description: "Caterbinge is an on-demand food catering service and your personal chef for party orders. We aim to provide superior quality food by allocating best-experienced chefs around the city to master the taste of every single dish of your custom built menu",
			cusines: { count: 2, cusines_type: ['hyderabadi'] },
			restricted_ser: { count: 2, rs_arr: ['hyderabadi'] },
		},
		{
			dishId: 1,
			dishName: "panipuri",foodCategory:1,
			ImageUrl: "../../assets/images/food.jpg",
			description: "Caterbinge is an on-demand food catering service and your personal chef for party orders. We aim to provide superior quality food by allocating best-experienced chefs around the city to master the taste of every single dish of your custom built menu",
			cusines: { count: 2, cusines_type: ['hyderabadi'] },
			restricted_ser: { count: 2, rs_arr: ['hyderabadi'] },
		},
	];

	maincourse: Dish[] = [
		{
			dishId: 1,
			dishName: "panipuri",foodCategory:2,
			ImageUrl: "../../assets/images/food.jpg",
			description: "Caterbinge is an on-demand food catering service and your personal chef for party orders. We aim to provide superior quality food by allocating best-experienced chefs around the city to master the taste of every single dish of your custom built menu",
			cusines: { count: 2, cusines_type: ['hyderabadi'] },
			restricted_ser: { count: 2, rs_arr: ['hyderabadi'] },
		},
		{
			dishId: 1,
			dishName: "panipuri",foodCategory:2,
			ImageUrl: "",
			description: "Caterbinge is an on-demand food catering service and your personal chef for party orders. We aim to provide superior quality food by allocating best-experienced chefs around the city to master the taste of every single dish of your custom built menu",
			cusines: { count: 2, cusines_type: ['hyderabadi'] },
			restricted_ser: { count: 2, rs_arr: ['hyderabadi'] },
		},
		{
			dishId: 1,
			dishName: "panipuri",foodCategory:1,
			ImageUrl: "",
			description: "Caterbinge is an on-demand food catering service and your personal chef for party orders. We aim to provide superior quality food by allocating best-experienced chefs around the city to master the taste of every single dish of your custom built menu",
			cusines: { count: 2, cusines_type: ['hyderabadi'] },
			restricted_ser: { count: 2, rs_arr: ['hyderabadi'] },
		},
		{
			dishId: 1,
			dishName: "panipuri",foodCategory:1,
			ImageUrl: "../../assets/images/food.jpg",
			description: "Caterbinge is an on-demand food catering service and your personal chef for party orders. We aim to provide superior quality food by allocating best-experienced chefs around the city to master the taste of every single dish of your custom built menu",
			cusines: { count: 2, cusines_type: ['hyderabadi'] },
			restricted_ser: { count: 2, rs_arr: ['hyderabadi'] },
		},
	];
	desserts: Dish[] = [
		{
			dishId: 1,
			dishName: "panipuri",foodCategory:1,
			ImageUrl: "../../assets/images/food.jpg",
			description: "Caterbinge is an on-demand food catering service and your personal chef for party orders. We aim to provide superior quality food by allocating best-experienced chefs around the city to master the taste of every single dish of your custom built menu",
			cusines: { count: 2, cusines_type: ['hyderabadi'] },
			restricted_ser: { count: 2, rs_arr: ['hyderabadi'] },
		},
		{
			dishId: 1,
			dishName: "panipuri",foodCategory:2,
			ImageUrl: "",
			description: "Caterbinge is an on-demand food catering service and your personal chef for party orders. We aim to provide superior quality food by allocating best-experienced chefs around the city to master the taste of every single dish of your custom built menu",
			cusines: { count: 2, cusines_type: ['hyderabadi'] },
			restricted_ser: { count: 2, rs_arr: ['hyderabadi'] },
		},
		{
			dishId: 1,
			dishName: "panipuri",foodCategory:1,
			ImageUrl: "",
			description: "Caterbinge is an on-demand food catering service and your personal chef for party orders. We aim to provide superior quality food by allocating best-experienced chefs around the city to master the taste of every single dish of your custom built menu",
			cusines: { count: 2, cusines_type: ['hyderabadi'] },
			restricted_ser: { count: 2, rs_arr: ['hyderabadi'] },
		},
		{
			dishId: 1,
			dishName: "panipuri",foodCategory:2,
			ImageUrl: "../../assets/images/food.jpg",
			description: "Caterbinge is an on-demand food catering service and your personal chef for party orders. We aim to provide superior quality food by allocating best-experienced chefs around the city to master the taste of every single dish of your custom built menu",
			cusines: { count: 2, cusines_type: ['hyderabadi'] },
			restricted_ser: { count: 2, rs_arr: ['hyderabadi'] },
		},
	];

	beverges: Dish[] = [
		{
			dishId: 1,
			dishName: "panipuri",foodCategory:1,
			description: "Caterbinge is an on-demand food catering service and your personal chef for party orders. We aim to provide superior quality food by allocating best-experienced chefs around the city to master the taste of every single dish of your custom built menu",
			cusines: { count: 2, cusines_type: ['hyderabadi'] },
			restricted_ser: { count: 2, rs_arr: ['hyderabadi'] },
		},
		{
			dishId: 1,
			dishName: "panipuri",foodCategory:2,
			description: "Caterbinge is an on-demand food catering service and your personal chef for party orders. We aim to provide superior quality food by allocating best-experienced chefs around the city to master the taste of every single dish of your custom built menu",
			cusines: { count: 2, cusines_type: ['hyderabadi'] },
			restricted_ser: { count: 2, rs_arr: ['hyderabadi'] },
		},
		{
			dishId: 1,
			dishName: "panipuri",foodCategory:2,
			description: "Caterbinge is an on-demand food catering service and your personal chef for party orders. We aim to provide superior quality food by allocating best-experienced chefs around the city to master the taste of every single dish of your custom built menu",
			cusines: { count: 2, cusines_type: ['hyderabadi'] },
			restricted_ser: { count: 2, rs_arr: ['hyderabadi'] },
		},
		{
			dishId: 1,
			dishName: "panipuri",foodCategory:1,
			description: "Caterbinge is an on-demand food catering service and your personal chef for party orders. We aim to provide superior quality food by allocating best-experienced chefs around the city to master the taste of every single dish of your custom built menu",
			cusines: { count: 2, cusines_type: ['hyderabadi'] },
			restricted_ser: { count: 2, rs_arr: ['hyderabadi'] },
		},
	];
	dishes: Array<any> = [
		{
			"Id": 1,
			"Name": "test",
			"Description": "Caterbinge is an on-demand food catering service and your personal chef for party orders. We aim to provide superior quality food by allocating best-experienced chefs around the city to master the taste of every single dish of your custom built menu",
			"ImageUrl": "../../assets/images/food.jpg",
			"FoodCategory": 2, //veg & non veg

			"Cuisines": "2",
			"Restrict": 0,
			"MenuCategory": "2"
		},
		{
			"Id": 2,
			"Name": "dsfsdkfs",
			"Description": "Caterbinge is an on-demand food catering service and your personal chef for party orders.",
			"ImageUrl": "",
			"FoodCategory": 1,
			"Cuisines": "2",
			"Restrict": 1,
			"MenuCategory": "2"
		},
		{
			"Id": 3,
			"Name": "test",
			"Description": "Caterbinge is an on-demand food catering service and your personal chef for party orders.",
			"ImageUrl": "",
			"FoodCategory": 1,
			"Cuisines": "2",
			"Restrict": "",
			"MenuCategory": "3"
		},
		{
			"Id": 4,
			"Name": "test",
			"Description": "Caterbinge is an on-demand food catering service and your personal chef for party orders.",
			"ImageUrl": "",
			"FoodCategory": 1,
			"Cuisines": "1",
			"Restrict": "",
			"MenuCategory": "3"
		},
		{
			"Id": 5,
			"Name": "test",
			"Description": "Caterbinge is an on-demand food catering service and your personal chef for party orders.",
			"ImageUrl": " ../../assets/images/food.jpg",
			"FoodCategory": 1,
			"Cuisines": "6",
			"Restrict": "",
			"MenuCategory": "2"
		},
		{
			"Id": 6,
			"Name": "test",
			"Description": "Caterbinge is an on-demand food catering service and your personal chef for party orders.",
			"ImageUrl": "",
			"FoodCategory": 1,
			"Cuisines": "1",
			"Restrict": "",
			"MenuCategory": "1"
		},
		{
			"Id": 7,
			"Name": "test",
			"Description": "Caterbinge is an on-demand food catering service and your personal chef for party orders.",
			"ImageUrl": "",
			"FoodCategory": 1,
			"Cuisines": "5",
			"Restrict": "",
			"MenuCategory": "2"
		},
		{
			"Id": 8,
			"Name": "test",
			"Description": "Caterbinge is an on-demand food catering service and your personal chef for party orders.",
			"ImageUrl": "",
			"FoodCategory": 1,
			"Cuisines": "4",
			"Restrict": "",
			"MenuCategory": "3"
		},
		{
			"Id": 9,
			"Name": "test",
			"Description": "",
			"ImageUrl": "",
			"FoodCategory": 1,
			"Cuisines": "2",
			"Restrict": "",
			"MenuCategory": "2"
		},
		{
			"Id": 10,
			"Name": "test",
			"Description": "",
			"ImageUrl": "",
			"FoodCategory": 1,
			"Cuisines": "3",
			"Restrict": "",
			"MenuCategory": "1"
		}
	];

	selectedDishes:Dish[] = [];


	constructor() {
		console.log(this.alldishes);
		this.alldishes = [
			{ dishTypeId: 1, dishType: "tiffins", dishes: this.tiffins },
			{ dishTypeId: 2, dishType: "starrters", dishes: this.startersArr },
			{ dishTypeId: 3, dishType: "maincourse", dishes: this.maincourse },
			{ dishTypeId: 4, dishType: "desserts", dishes: this.desserts },
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
