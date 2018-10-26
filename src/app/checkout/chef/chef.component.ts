import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from '../../services/master.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { CommentsComponent } from '../../shared/comments/comments.component';
import { MobilePreviewComponent } from '../components/mobile-preview/mobile-preview.component';


@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.css']
})
export class ChefComponent implements OnInit {

  constructor(
    public masterObj: MasterService,
    private router: Router,
    private commentService: NgbModal,
  ) {
  }

  ngOnInit() {

    this.masterObj.chef_eventmanager_flag = 'Chef';
    // if (this.masterObj.eventMangerCost > 0 && this.masterObj.totalCost){
    //   this.masterObj.totalCost -= this.masterObj.eventMangerCost;
    //   this.masterObj.eventMangerCost =0;
    // }


    this.getlist();
    this.getReviews();
  }

  getReviews(){
    this.masterObj.getJSONofChefsReviews().subscribe(
      (data)=> {
        this.masterObj.masterChefreviws = data;
      }
    )
  }
  getlist() {
    // this.masterObj.filteredchefList = [];

    let min = this.masterObj.selectedDishArr.length;
    min = (min <= 2) ? 1 : ((min < 5) ? 2 : 5);
    /* 1 to 3 dishes 1 chef*/
    /* 3 to 10 dishes 2 to 5 chef*/
    let length = this.masterObj.randomInt(1, min);

    if (this.masterObj.filteredchefList.length < length) {
      if (this.masterObj.chefsCost > 0 && this.masterObj.totalCost) {
        this.masterObj.totalCost -= this.masterObj.chefsCost;
        this.masterObj.chefsCost = 0;
      }
      this.masterObj.filteredchefList = [];
      for (let i = 0; i < length; i++) {
        let index = this.masterObj.randomInt(1, this.masterObj.ChefData.length);
        let arr = this.masterObj.ChefData[index];
        if (arr !== undefined) {
          arr.menu = '';
          let cost = 0;
          console.log(arr.Cost);
          if (this.masterObj.totalAttendees <= 250)
            this.masterObj.chefsCost += parseInt(arr.Cost, 10);
          else {
            let percent =  (this.masterObj.totalAttendees - 250) / 100;
            cost = arr.Cost + (Math.floor(percent) * (0.2) * arr.Cost);
            this.masterObj.chefsCost += cost;
          }

          this.masterObj.filteredchefList.push(arr);
        }
      }
      localStorage.setItem('filteredChefs',JSON.stringify(this.masterObj.filteredchefList));
      localStorage.setItem('chefsCost', this.masterObj.chefsCost.toString());
      console.log(this.masterObj.totalCost, this.masterObj.chefsCost)
      this.masterObj.totalCost += this.masterObj.chefsCost;
      localStorage.setItem('cost', this.masterObj.totalCost.toString());
    }
  }
  onproceed() {
    // 
    this.router.navigate(['./manager']);
  }
  onCommentPopup() {
    this.commentService.open(CommentsComponent);
  }

  opencat() {
    this.commentService.open(MobilePreviewComponent);
  }


}
