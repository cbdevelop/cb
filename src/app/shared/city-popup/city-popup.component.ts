import { Component, OnInit } from '@angular/core';
import { cityModel, MasterService, locationModel } from '../../services/master.service';
import { NgbActiveModal,NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertsComponent } from '../alerts/alerts.component';
import { alert } from '../models/alert.model';


@Component({
  selector: 'app-city-popup',
  templateUrl: './city-popup.component.html',
  styleUrls: ['./city-popup.component.css']
})
export class CityPopupComponent implements OnInit {

  cityArr: cityModel[] = [
    { ID: 1, City: 'Hyderabad', is_active: 1, Show: 1, image: './assets/images/hyderabad.png' },
    { ID: 2, City: 'Jaipur', is_active: 1, Show: 1, image: './assets/images/jaipur.png' },
    { ID: 3, City: 'Kolkata', is_active: 0, Show: 1, image: './assets/images/kolkata.png' },
    { ID: 4, City: 'Mumbai', is_active: 0, Show: 1, image: './assets/images/mumbai.png' },
    { ID: 5, City: 'Bangalore', is_active: 0, Show: 1, image: './assets/images/bangalore.png' },
    { ID: 6, City: 'Lucknow', is_active: 0, Show: 1, image: './assets/images/lucknow.png' },
    { ID: 7, City: 'Agra', is_active: 0, Show: 1, image: './assets/images/agra.png' },
    { ID: 8, City: 'Ahmedabad', is_active: 0, Show: 1, image: './assets/images/ahmedabad.png' },
    { ID: 9, City: 'Chennai', is_active: 0, Show: 1, image: './assets/images/chennai.png' },
    { ID: 10, City: 'Delhi', is_active: 0, Show: 1, image: './assets/images/delhi.png' }

  ]
  alert: alert = { type: 'success', message: '' };

  constructor(
    public masterObj: MasterService,
    private modalSer:NgbActiveModal,
    private modalService:NgbModal
  ) {
    this.masterObj.masterCities = this.cityArr;
  }

  ngOnInit() {
  }
  onSelectCity(city) {
    this.masterObj.clearData();
    if(city.is_active !=  0){

      this.masterObj.selCity = city; // this.masterObj.masterCities.filter(x => x.ID = id)[0];
      localStorage.setItem('selCity',JSON.stringify(this.masterObj.selCity));
      this.modalSer.close();
      this.masterObj.getJSONofLocation().subscribe(
        (data) => {
          let arr: Array<locationModel> = data;
         
          if (arr.length) {
            this.masterObj.locationArr = arr.filter(x => x.City_id == this.masterObj.selCity.ID  && x.is_active);
          }
        }
      );
    } else {
      const modalRef = this.modalService.open(AlertsComponent);
      this.alert.message = 'Stay tuned. We will be coming soon in ' + city.City;
      this.alert.type = 'warning';
      modalRef.componentInstance.alert = this.alert;
    }
  }
}


