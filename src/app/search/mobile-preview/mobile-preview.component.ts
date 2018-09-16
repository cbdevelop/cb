import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mobile-preview',
  templateUrl: './mobile-preview.component.html',
  styleUrls: ['./mobile-preview.component.css']
})
export class MobilePreviewComponent implements OnInit {

  constructor(public masterObj:MasterService,
    private activeModal: NgbActiveModal ) { }

  ngOnInit() {
  }
  remove(id){
    this.masterObj.selectedDishes.splice(this.masterObj.selectedDishes.indexOf(id) , 1);
    console.log(this.masterObj.selectedDishes);
  }

  onClose() {
    this.activeModal.dismiss();
  }

  onCheckout(){
    
  }
}
