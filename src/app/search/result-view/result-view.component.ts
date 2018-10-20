import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MasterService } from '../../services/master.service';

import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Menu } from '../../shared/models/menu.mode';


import { OrderPreviewComponent } from '../order-preview/order-preview.component';
import { MobilePreviewComponent } from '../mobile-preview/mobile-preview.component';
import { ChefCatPopupComponent } from '../chef-cat-popup/chef-cat-popup.component';
import { CommentsComponent } from '../../shared/comments/comments.component';
import { UserService } from '../../services/user_service/user.service';
import { AlertsService } from '../../services/alerts.service';

@Component({
  selector: 'app-result-view',
  templateUrl: './result-view.component.html',
  styleUrls: ['./result-view.component.css']
})
export class ResultViewComponent implements OnInit {

  all_categories: Menu[]
  dishes: any = []
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public service: MasterService,
    private userSerObj: UserService,
    private modalService: NgbModal,
    private alertsObj: AlertsService
  ) {
    if(this.service.searchObj.location.length < 1  || this.service.searchObj.datetime == null){
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.all_categories = this.service.alldishes;
    console.log(this.service.searchmenu_selection);
    this.getDishList();
  }

  getDishList() {
    this.service.getJSONofDishes().subscribe(
      (data) => {
        console.log(data);
        this.service.masterDish = data;
        this.service.dishArray = data;
        this.service.startersArray = this.service.getDishesByMenuID(1);
        this.service.snackArray = this.service.getDishesByMenuID(2);
        this.service.beverges_drinkArray = this.service.getDishesByMenuID(3);
        this.service.breadsArray = this.service.getDishesByMenuID(4);
        this.service.soupArray = this.service.getDishesByMenuID(5);
        this.service.saladsArray = this.service.getDishesByMenuID(6);
        this.service.MainCourseArray = this.service.getDishesByMenuID(7);
        this.service.desertsArray = this.service.getDishesByMenuID(8);
        this.service.stallsArray = this.service.getDishesByMenuID(9);

      }
    );
  }

  getCuisinesArr(id) {
    var arr = this.service.dishArray.filter(d => d.id == id);

    var res: string[] = [];
    if (arr.length) {
      if (arr[0].Cuisine.includes(","))
        return arr[0].Cuisine.split(",");
      else {
        if (arr[0].Cuisine == "")
          return [];
        res.push(arr[0].Cuisine);
        return res;
      }
    }
    return arr.length ? arr[0].Cuisine.split(",") : [];
    // return this.service.getCuisinesArr(id).length;
  }

  onSectionChange(sectionId: string) {
    this.service.searchmenu_selection = sectionId;

  }

 

  /* check if laredy selected this dish */
  
  openRes(menucategoryid, disId) {
    const modalRef = this.modalService.open(ChefCatPopupComponent);
    modalRef.componentInstance.cat_id = menucategoryid;
    modalRef.componentInstance.dishId = disId;
  }

  /* open pop up if cuisnes are there*/
  DishClicked(menucategoryid: number, disId) {
    console.log(disId);
    if (this.isDishSelected(menucategoryid, disId)) {
      console.log('selected');
      var arr = this.service.dishArray.filter(x => x.id == disId);

      if (arr[0].Cuisine != "" && this.getCuisinesArr(arr[0].id).length) {
        const modalRef = this.modalService.open(ChefCatPopupComponent);
        modalRef.componentInstance.cat_id = menucategoryid;
        modalRef.componentInstance.dishId = disId;
      } else if (arr.length) {
        this.alertsObj.openAlert({ message: 'This Dish already added', type: 'warning' });

        // const modalRef = this.modalService.open(AlertsComponent);
        
        // modalRef.componentInstance.alert = {message:'Already Added',type:'warning'};
      }

    } else {
      var arr = this.service.dishArray.filter(x => x.id == disId);

      if (this.getCuisinesArr(arr[0].id).length) {
        const modalRef = this.modalService.open(ChefCatPopupComponent);
        modalRef.componentInstance.cat_id = menucategoryid;
        modalRef.componentInstance.dishId = disId;
      } else if (arr.length) {
        // {ca  menucategoryid,arr[0]}
        arr[0].Restrictions = "";
        if(arr[0].Category_Type == 2){
          this.service.totalCost += this.service.nonVegAttendees * arr[0].Price;
        }else if(arr[0].Category_Type == 1){
          this.service.totalCost += this.service.vegAttendees * arr[0].Price;
        }else {
          this.service.totalCost += this.service.totalAttendees * arr[0].Price;
        }
        // this.service.totalCost += arr[0].Price;
        this.service.selectedDishArr.push(arr[0]);
        var selectedDish = JSON.stringify(this.service.selectedDishArr);
        localStorage.setItem("selDises", selectedDish);
        localStorage.setItem("cost", this.service.totalCost.toString());
      }
    }
  }


  openDishpopup(menucategoryid, disId) {
    const modalRef = this.modalService.open(ChefCatPopupComponent);
    modalRef.componentInstance.cat_id = menucategoryid;
    modalRef.componentInstance.dishId = disId;
  }

  isDishSelected(menucategoryid: number, disId) {
    return this.service.selectedDishArr.findIndex(d => d.id == disId) == -1 ? false : true;
  }

  openCart() {
    this.modalService.open(MobilePreviewComponent);
  }

  openComment() {

    this.modalService.open(CommentsComponent);

  }

  onCheckout() {
    if (this.userSerObj.userId) {

    }
    if (this.service.selectedDishArr.length) {
      if(this.service.selCity.ID == 2){

      }else 
        this.router.navigate(['../chef'], { relativeTo: this.route });
      // this.router.navigate(['../chef'], { relativeTo: this.route });
    }
  }

  fav(evt) {
    console.log(evt);
  }

}
