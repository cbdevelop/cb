import { Injectable } from '@angular/core';
import { Menu } from '../shared/models/menu.mode';
import { Dish, DishModel } from '../shared/models/dish.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';


@Injectable()
export class MasterService {

	ApiUrl = '';
	dishCount = 0;
	totalCost = 0;
	totalAttendees = 0;
	public searchObj: searchModel = { location: [], serviceType: [], nonVegAttnd: null, vegAttnd: null, datetime: new Date() };


	currentSection = 'home';
	searchmenu_selection = 'starters';
	masterDish: DishModel[] = [];
	dishArray: DishModel[] = [];
	selectedDishArr: DishModel[] = [];
	startersArray: DishModel[] = []; // menutype =1
	snackArray: DishModel[] = []; // menutype =2
	beverges_drinkArray: DishModel[] = []; // menutype =3
	breadsArray: DishModel[] = []; // menutype =4
	soupArray: DishModel[] = []; // menutype =5
	saladsArray: DishModel[] = []; // menutype =6
	MainCourseArray: DishModel[] = []; // menutype =7
	desertsArray: DishModel[] = []; // menutype =8
	stallsArray: DishModel[] = []; // menutype =9

	alldishes: Menu[] = [];
	filteredchefList: Array<any> = [];
	evntManagerSelFlag = false;
	selectedEvtManager = [];
	eventManagerList = [
		{
			'id': 1,
			'Name': 'Ahmed',
			'Experience': '',
			'Profile_Image': './assets/images/mana-de.png', 'locality': '',
			'Events_Managed': '10',
			'Proficiency': '',
			'About': '',
			'Rating': '4',
			'CB_Certified': '',
			'Reviews': [{
				'name': 'ram', 'Rating': 5, 'text': 'jdshlksdhai'
			}],
			'Portfolio': [],
			'Price': 4000
		},
		{
			'id': 2,
			'Name': 'Srikar Rao',
			'Experience': '',
			'Profile_Image': './assets/images/mana-de.png', 'locality': '',
			'Events_Managed': '',
			'Proficiency': '',
			'About': '',
			'Rating': '4',
			'CB_Certified': '',
			'Reviews': '',
			'Portfolio': '',
			'Price': 3000
		},
		{
			'id': 3,
			'Name': 'Shivam Pant',
			'Experience': '',
			'Profile_Image': './assets/images/mana-de.png', 'locality': '',
			'Events_Managed': '',
			'Proficiency': '',
			'About': '',
			'Rating': '4',
			'CB_Certified': '',
			'Reviews': '',
			'Portfolio': '',
			'Price': 3000
		},
		{
			'id': 4,
			'Name': 'Absar hussain',
			'Experience': '',
			'Profile_Image': './assets/images/mana-de.png', 'locality': '',
			'Events_Managed': '',
			'Proficiency': '',
			'About': '',
			'Rating': '4',
			'CB_Certified': '',
			'Reviews': '',
			'Portfolio': '',
			'Price': 3000
		},
		{
			'id': 5,
			'Name': 'Kaushik Rao',
			'Experience': '',
			'Profile_Image': './assets/images/mana-de.png', 'locality': '',
			'Events_Managed': '',
			'Proficiency': '',
			'About': '',
			'Rating': '4',
			'CB_Certified': '',
			'Reviews': '',
			'Portfolio': '',
			'Price': 3000
		},
		{
			'id': 6,
			'Name': 'Raju Narsimha',
			'Experience': '',
			'Profile_Image': './assets/images/mana-de.png', 'locality': '',
			'Events_Managed': '',
			'Proficiency': '',
			'About': '',
			'Rating': '4',
			'CB_Certified': '',
			'Reviews': '',
			'Portfolio': '',
			'Price': 3000
		},
		{
			'id': 7,
			'Name': 'Mani Sai',
			'Experience': '',
			'Profile_Image': './assets/images/mana-de.png', 'locality': '',
			'Events_Managed': '',
			'Proficiency': '',
			'About': '',
			'Rating': '4',
			'CB_Certified': '',
			'Reviews': '',
			'Portfolio': '',
			'Price': 3000
		},
		{
			'id': 8,
			'Name': 'Sai Kiran',
			'Experience': '',
			'Profile_Image': './assets/images/mana-de.png', 'locality': '',
			'Events_Managed': '',
			'Proficiency': '',
			'About': '',
			'Rating': '4',
			'CB_Certified': '',
			'Reviews': '',
			'Portfolio': '',
			'Price': 3000
		},
		{
			'id': 9,
			'Name': 'Zakir Sheik',
			'Experience': '',
			'Profile_Image': './assets/images/mana-de.png', 'locality': '',
			'Events_Managed': '',
			'Proficiency': '',
			'About': '',
			'Rating': '4',
			'CB_Certified': '',
			'Reviews': '',
			'Portfolio': '',
			'Price': 3000
		},
		{
			'id': 10,
			'Name': 'Rama Krishna',
			'Experience': '',
			'Profile_Image': './assets/images/mana-de.png', 'locality': '',
			'Events_Managed': '',
			'Proficiency': '',
			'About': '',
			'Rating': '4',
			'CB_Certified': '',
			'Reviews': '',
			'Portfolio': '',
			'Price': 3000
		},
		{
			'id': 11,
			'Name': 'Anil N',
			'Experience': '',
			'Profile_Image': './assets/images/mana-de.png', 'locality': '',
			'Events_Managed': '',
			'Proficiency': '',
			'About': '',
			'Rating': '4',
			'CB_Certified': '',
			'Reviews': '',
			'Portfolio': '',
			'Price': 3000
		},
		{
			'id': 12,
			'Name': 'Srinivas',
			'Experience': '',
			'Profile_Image': './assets/images/mana-de.png', 'locality': '',
			'Events_Managed': '',
			'Proficiency': '',
			'About': '',
			'Rating': '4',
			'CB_Certified': '',
			'Reviews': '',
			'Portfolio': '',
			'Price': 3000
		},
		{
			'id': 13,
			'Name': 'Imran Sheik',
			'Experience': '',
			'Profile_Image': './assets/images/mana-de.png', 'locality': '',
			'Events_Managed': '',
			'Proficiency': '',
			'About': '',
			'Rating': '4',
			'CB_Certified': '',
			'Reviews': '',
			'Portfolio': '',
			'Price': 3000
		},
		{
			'id': 14,
			'Name': 'Viswanath',
			'Experience': '',
			'Profile_Image': './assets/images/mana-de.png', 'locality': '',
			'Events_Managed': '',
			'Proficiency': '',
			'About': '',
			'Rating': '4',
			'CB_Certified': '',
			'Reviews': '',
			'Portfolio': '',
			'Price': 3000
		},
		{
			'id': 15,
			'Name': 'Ziyad Ahmed',
			'Experience': '',
			'Profile_Image': './assets/images/mana-de.png', 'locality': '',
			'Events_Managed': '',
			'Proficiency': '',
			'About': '',
			'Rating': '4',
			'CB_Certified': '',
			'Reviews': '',
			'Portfolio': '',
			'Price': 3000
		},
		{
			'id': 16,
			'Name': 'Abdul Moid',
			'Experience': '',
			'Profile_Image': './assets/images/mana-de.png', 'locality': '',
			'Events_Managed': '',
			'Proficiency': '',
			'About': '',
			'Rating': '4',
			'CB_Certified': '',
			'Reviews': '',
			'Portfolio': '',
			'Price': 3000
		}
	];

	startersArr: Dish[] = [
		{
			dishId: 1,
			dishName: 'upma',
			foodCategory: 1,
			ImageUrl: '../../assets/images/food.jpg',
			description: 'Caterbinge is an on-demand food catering service and your personal chef',
			cusines: ['hyderabadi'],
			restricted_ser: [],
			cost: 50
		},
		{
			dishId: 2,
			dishName: 'panipuri',
			foodCategory: 1,
			ImageUrl: '',
			description: 'Caterbinge is an on-demand food catering service and your personal chef for party orders. We aim to provide superior quality food by allocating best-experienced chefs around the city to master the taste of every single dish of your custom built menu',
			cusines: ['hyderabadi'],
			restricted_ser: ['hyderabadi'],
			cost: 30
		},
		{
			dishId: 3,
			dishName: 'paysam', foodCategory: 2,
			ImageUrl: '',
			description: 'Caterbinge is an on-demand food catering service and your personal chef for party orders. We aim to provide superior quality food by allocating best-experienced chefs around the city to master the taste of every single dish of your custom built menu',
			cusines: ['hyderabadi'],
			restricted_ser: ['hyderabadi'],
			cost: 100
		},
		{
			dishId: 4,
			dishName: 'purnalu', foodCategory: 1,
			ImageUrl: '../../assets/images/food.jpg',
			description: 'Caterbinge is an on-demand food catering service and your personal chef for party orders. We aim to provide superior quality food by allocating best-experienced chefs around the city to master the taste of every single dish of your custom built menu',
			cusines: [],
			restricted_ser: [],
			cost: 60
		},
	];

	Best: Dish[] = [
		{
			dishId: 5,
			dishName: 'Biryani',
			foodCategory: 2,
			ImageUrl: '../../assets/images/food.jpg',
			description: 'Caterbinge is an on-demand food catering service and your personal chef',
			cusines: ['hyderabadi', 'rayala semma'],
			restricted_ser: [],
			cost: 250
		},
		{
			dishId: 6,
			dishName: 'chicken marag',
			foodCategory: 2,
			ImageUrl: '',
			description: 'Caterbinge is an on-demand food catering service and your personal chef for party orders. We aim to provide superior quality food by allocating best-experienced chefs around the city to master the taste of every single dish of your custom built menu',
			cusines: ['hyderabadi'],
			restricted_ser: [],
			cost: 300
		},
		{
			dishId: 7,
			dishName: 'prawns', foodCategory: 2,
			ImageUrl: '',
			description: 'Caterbinge is an on-demand food catering service and your personal chef for party orders. We aim to provide superior quality food by allocating best-experienced chefs around the city to master the taste of every single dish of your custom built menu',
			cusines: [],
			restricted_ser: [],
			cost: 100
		},
	];

	maincourse: Dish[] = [
		{
			dishId: 8,
			dishName: 'pulav',
			foodCategory: 1,
			ImageUrl: '../../assets/images/food.jpg',
			description: 'Caterbinge is an on-demand food catering service and your personal chef',
			cusines: [],
			restricted_ser: [],
			cost: 50
		},
		{
			dishId: 9,
			dishName: 'chciken biryani',
			foodCategory: 2,
			ImageUrl: '',
			description: 'Caterbinge is an on-demand food catering service and your personal chef for party orders. We aim to provide superior quality food by allocating best-experienced chefs around the city to master the taste of every single dish of your custom built menu',
			cusines: ['hyderabadi'],
			restricted_ser: [],
			cost: 30
		},
		{
			dishId: 10,
			dishName: 'paysam', foodCategory: 1,
			ImageUrl: '',
			description: 'Caterbinge is an on-demand food catering service and your personal chef for party orders. We aim to provide superior quality food by allocating best-experienced chefs around the city to master the taste of every single dish of your custom built menu',
			cusines: [],
			restricted_ser: ['veg only'],
			cost: 100
		},
		{
			dishId: 11,
			dishName: '', foodCategory: 2,
			ImageUrl: '../../assets/images/food.jpg',
			description: 'Caterbinge is an on-demand food catering service and your personal chef for party orders. We aim to provide superior quality food by allocating best-experienced chefs around the city to master the taste of every single dish of your custom built menu',
			cusines: ['hyderabadi'],
			restricted_ser: ['hyderabadi'],
			cost: 500
		},
	];

	biryani: Dish[] = [
		{
			dishId: 12,
			dishName: 'Veg Biryani',
			foodCategory: 1,
			ImageUrl: '../../assets/images/food.jpg',
			description: 'Caterbinge is an on-demand food catering service and your personal chef',
			cusines: [],
			restricted_ser: [],
			cost: 120
		},
		{
			dishId: 13,
			dishName: 'chciken biryani',
			foodCategory: 2,
			ImageUrl: '',
			description: 'Caterbinge is an on-demand food catering service and your personal chef for party orders. We aim to provide superior quality food by allocating best-experienced chefs around the city to master the taste of every single dish of your custom built menu',
			cusines: ['hyderabadi', 'Rayalaseema'],
			restricted_ser: [],
			cost: 220
		},
		{
			dishId: 14,
			dishName: 'Meals',
			foodCategory: 1,
			ImageUrl: '',
			description: 'Caterbinge is an on-demand food catering service and your personal chef for party orders. We aim to provide superior quality food by allocating best-experienced chefs around the city to master the taste of every single dish of your custom built menu',
			cusines: [],
			restricted_ser: [],
			cost: 100
		},
		{
			dishId: 15,
			dishName: 'Raju gari kodi pulav',
			foodCategory: 2,
			ImageUrl: '../../assets/images/food.jpg',
			description: 'Caterbinge is an on-demand food catering service and your personal chef for party orders. We aim to provide superior quality food by allocating best-experienced chefs around the city to master the taste of every single dish of your custom built menu',
			cusines: [],
			restricted_ser: [],
			cost: 300
		},
	];

	beverges: Dish[] = [];

	ChefData = [
		{
			'Name': 'Faheem',
			'From': 'Hyderabad',
			'total_event_served': 32,
			'Rating': 4.2,
			'Proficiency': 'hyderabadi, persian',
			'Experience': 12,
			'Profile_Picture': '',
			'Cost': '1500 for anything below 150 else 15pp untill 400 else 10pp for infinite',
			'About': '',
			'Reviews': [{
				'name': 'xyz',
				'rating': 3,
				'text': 'Chicken biriyani and majestic chicken were so flavoursome, but a little too spicy for my palate and was truely Hyderabadi way, the raita complements the spicyness perfectly., The biryani is cooked very well and the chicken was tender and delicious.',
			}],
			'Gold': 'Biryani',
			'menu': [
				'butter chicken', 'chicken biryani'
			]
		},
		{
			'Name': 'Ahmed',
			'From': 'Hyderabad',
			'total_event_served': 14,
			'Rating': 4,
			'Proficiency': 'hyderabadi, middle eastern',
			'Experience': 7,
			'Profile_Picture': '',
			'Cost': '',
			'About': '',
			'Reviews': [{
				'name': 'xyz',
				'rating': 3,
				'text': ''
			}],
			'Gold': '',
			'menu': [
				'chicken 65', 'chicken biryani'
			]
		},
		{
			'Name': 'Mirza',
			'From': 'Hyderabad',
			'total_event_served': 23,
			'Rating': 4,
			'Proficiency': 'hyderabadi ',
			'Experience': 15,
			'Profile_Picture': '',
			'Cost': '',
			'About': '',
			'Reviews': [{
				'name': 'xyz',
				'rating': 3,
				'text': ''
			}],
			'Gold': '',
			'menu': [
				'chicken curry', 'mutton biryani'
			]
		},
		{
			'Name': 'Raju',
			'From': 'Hyderabad',
			'total_event_served': 22,
			'Rating': 4.5,
			'Proficiency': 'telugu, chinese',
			'Experience': 16,
			'Profile_Picture': '',
			'Cost': '',
			'About': '',
			'Reviews': [{
				'name': 'xyz',
				'rating': 3,
				'text': ''
			}],
			'Gold': '',
			'menu': []
		},
		{
			'Name': 'Sai teja',
			'From': 'Vijayawada',
			'total_event_served': 15,
			'Rating': 4,
			'Proficiency': 'Andhra, indian',
			'Experience': 9,
			'Profile_Picture': '',
			'Cost': '',
			'About': '',
			'Reviews': [{
				'name': 'xyz',
				'rating': 3,
				'text': ''
			}],
			'Gold': '',
			'menu': []
		},
		{
			'Name': 'Furqaan',
			'From': 'Hyderabad',
			'total_event_served': 23,
			'Rating': 4.6,
			'Proficiency': 'hyderabadi, chinese',
			'Experience': 11,
			'Profile_Picture': '',
			'Cost': '',
			'About': '',
			'Reviews': [{
				'name': 'xyz',
				'rating': 3,
				'text': ''
			}],
			'Gold': '',
			'menu': []
		},
		{
			'Name': 'Usman',
			'From': 'Hyderabad',
			'total_event_served': 21,
			'Rating': 4,
			'Proficiency': 'hyderabadi, telangana',
			'Experience': 14,
			'Profile_Picture': '',
			'Cost': '',
			'About': '',
			'Reviews': [{
				'name': 'xyz',
				'rating': 3,
				'text': ''
			}],
			'Gold': '',
			'menu': []
		},
		{
			'Name': 'Faisal',
			'From': 'Hyderabad',
			'total_event_served': 41,
			'Rating': 3.8,
			'Proficiency': 'hyderabadi, south asia',
			'Experience': 12,
			'Profile_Picture': '',
			'Cost': '',
			'About': '',
			'Reviews': [{
				'name': 'xyz',
				'rating': 3,
				'text': ''
			}],
			'Gold': '',
			'menu': []
		},
		{
			'Name': 'Aadinath',
			'From': 'Hyderabad',
			'total_event_served': 20,
			'Rating': 4,
			'Proficiency': 'south india, andhra, telugu',
			'Experience': 10,
			'Profile_Picture': '',
			'Cost': '',
			'About': '',
			'Reviews': [{
				'name': 'xyz',
				'rating': 3,
				'text': ''
			}],
			'Gold': '',
			'menu': []
		},
		{
			'Name': 'Kiran',
			'From': 'Hyderabad',
			'total_event_served': 16,
			'Rating': 4.5,
			'Proficiency': 'Andhra',
			'Experience': 8,
			'Profile_Picture': '',
			'Cost': '',
			'About': '',
			'Reviews': [{
				'name': 'xyz',
				'rating': 3,
				'text': ''
			}],
			'Gold': '',
			'menu': []
		},
		{
			'Name': 'Kailash',
			'From': 'Hyderabad',
			'total_event_served': 33,
			'Rating': 4.5,
			'Proficiency': 'chinese, english',
			'Experience': 12,
			'Profile_Picture': '',
			'Cost': '',
			'About': '',
			'Reviews': [{
				'name': 'xyz',
				'rating': 3,
				'text': ''
			}],
			'Gold': '',
			'menu': []
		},
		{
			'Name': 'Ashish',
			'From': 'Hyderabad',
			'total_event_served': 46,
			'Rating': 4.5,
			'Proficiency': 'andhra ',
			'Experience': 13,
			'Profile_Picture': '',
			'Cost': '',
			'About': '',
			'Reviews': [{
				'name': 'xyz',
				'rating': 3,
				'text': ''
			}],
			'Gold': '',
			'menu': []
		},
		{
			'Name': 'Kalyan',
			'From': 'Hyderabad',
			'total_event_served': 32,
			'Rating': 4.5,
			'Proficiency': 'telugu',
			'Experience': 17,
			'Profile_Picture': '',
			'Cost': '',
			'About': '',
			'Reviews': [{
				'name': 'xyz',
				'rating': 3,
				'text': ''
			}],
			'Gold': '',
			'menu': []
		},
		{
			'Name': 'Ramesh',
			'From': 'Hyderabad',
			'total_event_served': 31,
			'Rating': 4.5,
			'Proficiency': 'telugu',
			'Experience': 14,
			'Profile_Picture': '',
			'Cost': '',
			'About': '',
			'Reviews': [{
				'name': 'xyz',
				'rating': 3,
				'text': ''
			}],
			'Gold': '',
			'menu': []
		},
		{
			'Name': 'Rajesh',
			'From': 'Hyderabad',
			'total_event_served': 22,
			'Rating': 4.5,
			'Proficiency': 'south indian',
			'Experience': 11,
			'Profile_Picture': '',
			'Cost': '',
			'About': '',
			'Reviews': [{
				'name': 'xyz',
				'rating': 3,
				'text': ''
			}],
			'Gold': '',
			'menu': []
		}
	];

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
		};

	comments: string;

	constructor(
		private http: HttpClient
	) {
		this.ApiUrl = environment.apiUrl;
		this.alldishes = [
			{ dishTypeId: 1, dishType: 'Best', dishes: this.Best },
			{ dishTypeId: 2, dishType: 'starrters', dishes: this.startersArr },
			{ dishTypeId: 3, dishType: 'maincourse', dishes: this.maincourse },
			{ dishTypeId: 4, dishType: 'Biryani', dishes: this.biryani },
			{ dishTypeId: 5, dishType: 'beverges', dishes: this.beverges }
		];

		this.selectedDishes.best = [];
		this.selectedDishes.main = [];
		this.selectedDishes.starter = [];
		this.selectedDishes.biryani = [];
		this.selectedDishes.beverges = [];

		if (localStorage.length) {
			if (localStorage.getItem('selDises')) {
				this.selectedDishes = JSON.parse(localStorage.getItem('selDises'));
			}
			if (localStorage.getItem('cost')) {
				this.totalCost = parseInt(localStorage.getItem('cost'), 10);
			}
			if (localStorage.getItem('selManager')) {
				this.selectedEvtManager = JSON.parse(localStorage.getItem('selManager'));
			}
		}
	}


	randomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}


	public getJSONofDishes(): Observable<any> {
		return this.http.get<DishModel>('./assets/dishes.json');

	}

	getDishesByMenuID(id) {
		return this.dishArray.filter(d => d.Menu_Type === id);
	}

	getSelectedDishesById(menutype) {
		return this.selectedDishArr.filter(d => d.Menu_Type === menutype);
	}

	getCuisinesArr(did): Array<any> {
		const arr = this.dishArray.filter(d => d.id === did);

		const res: string[] = [];
		if (arr.length) {
			if (arr[0].Cuisine.includes(',')) {
				return arr[0].Cuisine.split(',');
			} else {
				if (arr[0].Cuisine === '') {
					return [];
				}
				res.push(arr[0].Cuisine);
				return res;
			}
		}
		return arr.length ? arr[0].Cuisine.split(',') : [];

	}

	getRestrictArr(id): Array<any> {
		const arr = this.dishArray.filter(d => d.id === id);
		let res: string[];
		if (arr.length) {
			if (arr[0].Restrictions.includes(',')) {
				return arr[0].Restrictions.split(',');
			} else {
				if (arr[0].Restrictions === '') {
					return [];
				}
				res.push(arr[0].Restrictions);
				return res;
			}
		}

		return arr.length ? arr[0].Restrictions.split(',') : [];

	}

	registerChef(options) {
		return this.http.post(this.ApiUrl + '/register', options).pipe();
	}

	registerUser(options) {
		return this.http.post(this.ApiUrl + '/userregister', options);
	}

	registerManager(options) {
		return this.http.post(this.ApiUrl + '/registerManager', options);
	}
	proceedToPayalPayment() {
		return this.http.post(this.ApiUrl + '/paynow').pipe();
	}
}

export interface searchModel {
	location: Array<any>;
	serviceType: Array<any>;
	vegAttnd: number;
	nonVegAttnd: number;
	datetime: Date;

}
