import { Injectable } from '@angular/core';
import { Menu } from '../shared/models/menu.mode';
import { Dish } from '../shared/models/dish.model';


@Injectable()
export class MasterService {


	totalCost: number = 0;
	currentSection = 'home';
	searchmenu_selection = "all";
	alldishes: Menu[] = [];
	filteredchefList = []
	startersArr: Dish[] = [
		{
			dishId: 1,
			dishName: "upma",
			foodCategory: 1,
			ImageUrl: "../../assets/images/food.jpg",
			description: "Caterbinge is an on-demand food catering service and your personal chef",
			cusines: ['hyderabadi'],
			restricted_ser: [],
			cost: 50
		},
		{
			dishId: 2,
			dishName: "panipuri",
			foodCategory: 1,
			ImageUrl: "",
			description: "Caterbinge is an on-demand food catering service and your personal chef for party orders. We aim to provide superior quality food by allocating best-experienced chefs around the city to master the taste of every single dish of your custom built menu",
			cusines: ['hyderabadi'],
			restricted_ser: ['hyderabadi'],
			cost: 30
		},
		{
			dishId: 3,
			dishName: "paysam", foodCategory: 2,
			ImageUrl: "",
			description: "Caterbinge is an on-demand food catering service and your personal chef for party orders. We aim to provide superior quality food by allocating best-experienced chefs around the city to master the taste of every single dish of your custom built menu",
			cusines: ['hyderabadi'],
			restricted_ser: ['hyderabadi'],
			cost: 100
		},
		{
			dishId: 4,
			dishName: "purnalu", foodCategory: 1,
			ImageUrl: "../../assets/images/food.jpg",
			description: "Caterbinge is an on-demand food catering service and your personal chef for party orders. We aim to provide superior quality food by allocating best-experienced chefs around the city to master the taste of every single dish of your custom built menu",
			cusines: [],
			restricted_ser: [],
			cost: 60
		},
	];

	Best: Dish[] = [
		{
			dishId: 5,
			dishName: "Biryani",
			foodCategory: 2,
			ImageUrl: "../../assets/images/food.jpg",
			description: "Caterbinge is an on-demand food catering service and your personal chef",
			cusines: ['hyderabadi', 'rayala semma'],
			restricted_ser: [],
			cost: 250
		},
		{
			dishId: 6,
			dishName: "chicken marag",
			foodCategory: 2,
			ImageUrl: "",
			description: "Caterbinge is an on-demand food catering service and your personal chef for party orders. We aim to provide superior quality food by allocating best-experienced chefs around the city to master the taste of every single dish of your custom built menu",
			cusines: ['hyderabadi'],
			restricted_ser: [],
			cost: 300
		},
		{
			dishId: 7,
			dishName: "prawns", foodCategory: 2,
			ImageUrl: "",
			description: "Caterbinge is an on-demand food catering service and your personal chef for party orders. We aim to provide superior quality food by allocating best-experienced chefs around the city to master the taste of every single dish of your custom built menu",
			cusines: [],
			restricted_ser: [],
			cost: 100
		},
	];

	maincourse: Dish[] = [
		{
			dishId: 8,
			dishName: "pulav",
			foodCategory: 1,
			ImageUrl: "../../assets/images/food.jpg",
			description: "Caterbinge is an on-demand food catering service and your personal chef",
			cusines: [],
			restricted_ser: [],
			cost: 50
		},
		{
			dishId: 9,
			dishName: "chciken biryani",
			foodCategory: 2,
			ImageUrl: "",
			description: "Caterbinge is an on-demand food catering service and your personal chef for party orders. We aim to provide superior quality food by allocating best-experienced chefs around the city to master the taste of every single dish of your custom built menu",
			cusines: ['hyderabadi'],
			restricted_ser: [],
			cost: 30
		},
		{
			dishId: 10,
			dishName: "paysam", foodCategory: 1,
			ImageUrl: "",
			description: "Caterbinge is an on-demand food catering service and your personal chef for party orders. We aim to provide superior quality food by allocating best-experienced chefs around the city to master the taste of every single dish of your custom built menu",
			cusines: [],
			restricted_ser: ['veg only'],
			cost: 100
		},
		{
			dishId: 11,
			dishName: "", foodCategory: 2,
			ImageUrl: "../../assets/images/food.jpg",
			description: "Caterbinge is an on-demand food catering service and your personal chef for party orders. We aim to provide superior quality food by allocating best-experienced chefs around the city to master the taste of every single dish of your custom built menu",
			cusines: ['hyderabadi'],
			restricted_ser: ['hyderabadi'],
			cost: 500
		},
	];

	biryani: Dish[] = [
		{
			dishId: 12,
			dishName: "Veg Biryani",
			foodCategory: 1,
			ImageUrl: "../../assets/images/food.jpg",
			description: "Caterbinge is an on-demand food catering service and your personal chef",
			cusines: [],
			restricted_ser: [],
			cost: 120
		},
		{
			dishId: 13,
			dishName: "chciken biryani",
			foodCategory: 2,
			ImageUrl: "",
			description: "Caterbinge is an on-demand food catering service and your personal chef for party orders. We aim to provide superior quality food by allocating best-experienced chefs around the city to master the taste of every single dish of your custom built menu",
			cusines: ['hyderabadi', 'Rayalaseema'],
			restricted_ser: [],
			cost: 220
		},
		{
			dishId: 14,
			dishName: "Meals",
			foodCategory: 1,
			ImageUrl: "",
			description: "Caterbinge is an on-demand food catering service and your personal chef for party orders. We aim to provide superior quality food by allocating best-experienced chefs around the city to master the taste of every single dish of your custom built menu",
			cusines: [],
			restricted_ser: [],
			cost: 100
		},
		{
			dishId: 15,
			dishName: "Raju gari kodi pulav",
			foodCategory: 2,
			ImageUrl: "../../assets/images/food.jpg",
			description: "Caterbinge is an on-demand food catering service and your personal chef for party orders. We aim to provide superior quality food by allocating best-experienced chefs around the city to master the taste of every single dish of your custom built menu",
			cusines: [],
			restricted_ser: [],
			cost: 300
		},
	];

	beverges: Dish[] = [];

	ChefData = [
		{
			"Name": "Faheem",
			"From": "Hyderabad",
			"total_event_served": 32,
			"Rating": 4.2,
			"Proficiency": "hyderabadi, persian",
			"Experience": 12,
			"Profile_Picture": "",
			"Cost": "1500 for anything below 150 else 15pp untill 400 else 10pp for infinite",
			"About": "",
			"Reviews": [{
				"name": "xyz",
				"rating": 3,
				"text": "Chicken biriyani and majestic chicken were so flavoursome, but a little too spicy for my palate and was truely Hyderabadi way, the raita complements the spicyness perfectly., The biryani is cooked very well and the chicken was tender and delicious.",
			}],
			"Gold": "Biryani",
			"menu": [
				"butter chicken", "chicken biryani"
			]
		},
		{
			"Name": "Ahmed",
			"From": "Hyderabad",
			"total_event_served": 14,
			"Rating": 4,
			"Proficiency": "hyderabadi, middle eastern",
			"Experience": 7,
			"Profile_Picture": "",
			"Cost": "",
			"About": "",
			"Reviews": [{
				"name": "xyz",
				"rating": 3,
				"text": ""
			}],
			"Gold": "",
			"menu": [
				"chicken 65", "chicken biryani"
			]
		},
		{
			"Name": "Mirza",
			"From": "Hyderabad",
			"total_event_served": 23,
			"Rating": 4,
			"Proficiency": "hyderabadi ",
			"Experience": 15,
			"Profile_Picture": "",
			"Cost": "",
			"About": "",
			"Reviews": [{
				"name": "xyz",
				"rating": 3,
				"text": ""
			}],
			"Gold": "",
			"menu": [
				"chicken curry", "mutton biryani"
			]
		},
		{
			"Name": "Raju",
			"From": "Hyderabad",
			"total_event_served": 22,
			"Rating": 4.5,
			"Proficiency": "telugu, chinese",
			"Experience": 16,
			"Profile_Picture": "",
			"Cost": "",
			"About": "",
			"Reviews": [{
				"name": "xyz",
				"rating": 3,
				"text": ""
			}],
			"Gold": "",
			"menu": []
		},
		{
			"Name": "Sai teja",
			"From": "Vijayawada",
			"total_event_served": 15,
			"Rating": 4,
			"Proficiency": "Andhra, indian",
			"Experience": 9,
			"Profile_Picture": "",
			"Cost": "",
			"About": "",
			"Reviews": [{
				"name": "xyz",
				"rating": 3,
				"text": ""
			}],
			"Gold": "",
			"menu": []
		},
		{
			"Name": "Furqaan",
			"From": "Hyderabad",
			"total_event_served": 23,
			"Rating": 4.6,
			"Proficiency": "hyderabadi, chinese",
			"Experience": 11,
			"Profile_Picture": "",
			"Cost": "",
			"About": "",
			"Reviews": [{
				"name": "xyz",
				"rating": 3,
				"text": ""
			}],
			"Gold": "",
			"menu": []
		},
		{
			"Name": "Usman",
			"From": "Hyderabad",
			"total_event_served": 21,
			"Rating": 4,
			"Proficiency": "hyderabadi, telangana",
			"Experience": 14,
			"Profile_Picture": "",
			"Cost": "",
			"About": "",
			"Reviews": [{
				"name": "xyz",
				"rating": 3,
				"text": ""
			}],
			"Gold": "",
			"menu": []
		},
		{
			"Name": "Faisal",
			"From": "Hyderabad",
			"total_event_served": 41,
			"Rating": 3.8,
			"Proficiency": "hyderabadi, south asia",
			"Experience": 12,
			"Profile_Picture": "",
			"Cost": "",
			"About": "",
			"Reviews": [{
				"name": "xyz",
				"rating": 3,
				"text": ""
			}],
			"Gold": "",
			"menu": []
		},
		{
			"Name": "Aadinath",
			"From": "Hyderabad",
			"total_event_served": 20,
			"Rating": 4,
			"Proficiency": "south india, andhra, telugu",
			"Experience": 10,
			"Profile_Picture": "",
			"Cost": "",
			"About": "",
			"Reviews": [{
				"name": "xyz",
				"rating": 3,
				"text": ""
			}],
			"Gold": "",
			"menu": []
		},
		{
			"Name": "Kiran",
			"From": "Hyderabad",
			"total_event_served": 16,
			"Rating": 4.5,
			"Proficiency": "Andhra",
			"Experience": 8,
			"Profile_Picture": "",
			"Cost": "",
			"About": "",
			"Reviews": [{
				"name": "xyz",
				"rating": 3,
				"text": ""
			}],
			"Gold": "",
			"menu": []
		},
		{
			"Name": "Kailash",
			"From": "Hyderabad",
			"total_event_served": 33,
			"Rating": 4.5,
			"Proficiency": "chinese, english",
			"Experience": 12,
			"Profile_Picture": "",
			"Cost": "",
			"About": "",
			"Reviews": [{
				"name": "xyz",
				"rating": 3,
				"text": ""
			}],
			"Gold": "",
			"menu": []
		},
		{
			"Name": "Ashish",
			"From": "Hyderabad",
			"total_event_served": 46,
			"Rating": 4.5,
			"Proficiency": "andhra ",
			"Experience": 13,
			"Profile_Picture": "",
			"Cost": "",
			"About": "",
			"Reviews": [{
				"name": "xyz",
				"rating": 3,
				"text": ""
			}],
			"Gold": "",
			"menu": []
		},
		{
			"Name": "Kalyan",
			"From": "Hyderabad",
			"total_event_served": 32,
			"Rating": 4.5,
			"Proficiency": "telugu",
			"Experience": 17,
			"Profile_Picture": "",
			"Cost": "",
			"About": "",
			"Reviews": [{
				"name": "xyz",
				"rating": 3,
				"text": ""
			}],
			"Gold": "",
			"menu": []
		},
		{
			"Name": "Ramesh",
			"From": "Hyderabad",
			"total_event_served": 31,
			"Rating": 4.5,
			"Proficiency": "telugu",
			"Experience": 14,
			"Profile_Picture": "",
			"Cost": "",
			"About": "",
			"Reviews": [{
				"name": "xyz",
				"rating": 3,
				"text": ""
			}],
			"Gold": "",
			"menu": []
		},
		{
			"Name": "Rajesh",
			"From": "Hyderabad",
			"total_event_served": 22,
			"Rating": 4.5,
			"Proficiency": "south indian",
			"Experience": 11,
			"Profile_Picture": "",
			"Cost": "",
			"About": "",
			"Reviews": [{
				"name": "xyz",
				"rating": 3,
				"text": ""
			}],
			"Gold": "",
			"menu": []
		}
	]

	selectedDishes: {
		best: Dish[],
		starter: Dish[],
		main: Dish[],
		biryani: Dish[],
		beverges: Dish[]
	} = {
			best: [],
			starter: [],
			main: [],
			biryani: [],
			beverges: []
		}

	comments: string;

	constructor() {

		this.alldishes = [
			{ dishTypeId: 1, dishType: "Best", dishes: this.Best },
			{ dishTypeId: 2, dishType: "starrters", dishes: this.startersArr },
			{ dishTypeId: 3, dishType: "maincourse", dishes: this.maincourse },
			{ dishTypeId: 4, dishType: "Biryani", dishes: this.biryani },
			{ dishTypeId: 5, dishType: "beverges", dishes: this.beverges }
		];

		this.selectedDishes.best = [];
		this.selectedDishes.main = [];
		this.selectedDishes.starter = [];
		this.selectedDishes.biryani = [];
		this.selectedDishes.beverges = [];

	}


	randomInt(min, max){
		return Math.floor(Math.random() * (max - min + 1)) + min;
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
