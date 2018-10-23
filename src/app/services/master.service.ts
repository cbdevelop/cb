import { Injectable } from '@angular/core';
import { Menu } from '../shared/models/menu.mode';
import { Dish, DishModel } from '../shared/models/dish.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';



@Injectable()
export class MasterService {

	// tslint:disable-next-line:indent
	// tslint:disable-next-line:indent
	footerFlag= true;
	ApiUrl = '';
	dishCount = 0;
	totalCost = 0;
	dishesCost = 0;
	chefsCost = 0;
	eventMangerCost = 0;
	serviceCost =0;
	// vegAttendees = 0;
	// nonVegAttendees = 0;
	totalAttendees = 0;
	searchObj: SearchModel = {
		location: [], serviceType: [], nonVegAttnd: null, vegAttnd: null, datetime: null
	};
	session = '';


	currentSection = 'home';
	searchmenu_selection = 'starters';

	/* dishes */
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
	/* dishes end */

	alldishes: Menu[] = [];
	filteredchefList: Array<any> = [];
	evntManagerSelFlag = true;
	chef_eventmanager_flag = 'Chef';
	selectedEvtManager = [];
	eventManagerList = [
		
	];


	ChefData = [];

	/* cities */
	masterCities: cityModel[] = [];
	selCity: cityModel = { ID: 0, City: '', is_active: null, Show: null, image: '' };
	masterLocation: locationModel[] = [];
	selLoc: locationModel = {
		location: '', postalcode: null, is_active: null, City_id: null
	};
	locationArr: locationModel[] = [];
	/* cities end*/

	/*service type  */
	masterServiceType = [
		{ id: 1, type: "drop off" }, { id: 2, type: "buffet" }, { id: 3, type: "sit down" },
		{ id: 4, type: "sit down/buffet" }
	]


	comments: string;

	constructor(
		private http: HttpClient
	) {
		this.ApiUrl = environment.apiUrl;

		if (localStorage.length) {
			if (localStorage.getItem('selDises')) {
				this.selectedDishArr = JSON.parse(localStorage.getItem('selDises'));
			}
			if (localStorage.getItem('cost')) {
				this.totalCost = parseInt(localStorage.getItem('cost'), 10);
			}
			if(localStorage.getItem('noManager') == 'yes'){
				this.evntManagerSelFlag = true;
			};
			if (localStorage.getItem('selManager')) {
				this.selectedEvtManager = JSON.parse(localStorage.getItem('selManager'));
			}
			if (localStorage.getItem('comment') !== undefined) {
				this.comments = localStorage.getItem('comment');
			}
			if (localStorage.getItem('searchObj') !== undefined && localStorage.getItem('searchObj') != null) {
				this.searchObj = JSON.parse(localStorage.getItem('searchObj'));
			}
			if (localStorage.getItem('session') !== undefined && localStorage.getItem('session')) {
				this.session = localStorage.getItem('session');
			}
			if (localStorage.getItem('selCity') !== undefined && localStorage.getItem('selCity')) {
				this.selCity = JSON.parse(localStorage.getItem('selCity'));
			}
			if ([null,undefined,''].indexOf(localStorage.getItem('totalAttnd')) == -1 ) {
				console.log(localStorage.getItem('totalAttnd'));
				this.totalAttendees = parseInt(localStorage.getItem('totalAttnd'), 10);
			}
			if ([null,undefined,''].indexOf(localStorage.getItem('dishCost')) == -1 ) {
				
				this.dishesCost = parseInt(localStorage.getItem('dishCost'), 10);
			}
			if ([null,undefined,''].indexOf(localStorage.getItem('chefsCost')) == -1 ) {
				
				this.chefsCost = parseInt(localStorage.getItem('chefsCost'), 10);
			}
			if ([null,undefined,''].indexOf(localStorage.getItem('serviceCost')) == -1 ) {
				
				this.serviceCost = parseInt(localStorage.getItem('serviceCost'), 10);
			}
			if ([null,undefined,''].indexOf(localStorage.getItem('chefsList')) == -1 ) {
				
				this.filteredchefList =  JSON.parse (localStorage.getItem('chefsList'));
			}
			if ([null,undefined,''].indexOf(localStorage.getItem('eventMangerCost')) == -1 ) {
				
				this.eventMangerCost =  JSON.parse (localStorage.getItem('eventMangerCost'));
			}
			if ([null,undefined,''].indexOf(localStorage.getItem('filteredChefs')) == -1 ) {
				
				this.filteredchefList =  JSON.parse (localStorage.getItem('filteredChefs'));
			}
			
		}
	}

	clearData() {
		this.totalCost = 0;
		this.totalAttendees = 0;
		// this.nonVegAttendees = 0;
		// this.vegAttendees = 0;
		this.comments='';
		this.dishesCost = 0;
		this.chefsCost = 0;
		this.eventMangerCost = 0;
		this.selectedDishArr = [];
		this.selectedEvtManager = [];
		this.filteredchefList =[];
		this.session ='';
		this.selCity = { ID: 0, City: '', is_active: null, Show: null, image: '' };
		this.searchObj = {
			location: [], serviceType: [], nonVegAttnd: null, vegAttnd: null, datetime: null
		}
		localStorage.clear();

	}

	randomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}


	public getJSONofDishes(): Observable<any> {
		return this.http.get<DishModel>('./assets/dishes.json');

	}

	public getJSONofLocation(): Observable<any> {
		return this.http.get<DishModel>('./assets/location.json');

	}

	public getJSONofChefs(): Observable<any> {
		return this.http.get<DishModel>('./assets/chefs.json');

	}

	public getJSONofEventManagers(): Observable<any> {
		return this.http.get<DishModel>('./assets/eventmanager.json');

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
		return this.http.post(this.ApiUrl + '/v1/register', options).pipe();
	}

	registerUser(options) {
		return this.http.post(this.ApiUrl + '/v1/userregister', options);
	}

	registerManager(options) {
		return this.http.post(this.ApiUrl + '/v1/registerManager', options);
	}
	proceedToPayalPayment(options) {
		console.log('paypal service');
		return this.http.post(this.ApiUrl + '/v1/paynow', options).pipe();
	}



}

export interface SearchModel {
	location: Array<any>;
	serviceType: Array<any>;
	vegAttnd: number;
	nonVegAttnd: number;
	datetime: Date;

}

export interface cityModel {
	ID: number,
	City: string,
	is_active: number,
	Show: number,
	image: string
}

export interface locationModel {
	"location": string,
	"postalcode": number,
	"is_active": number,
	"City_id": number
}
