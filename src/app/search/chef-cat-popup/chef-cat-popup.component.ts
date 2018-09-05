import { Component, OnInit,Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-chef-cat-popup',
  templateUrl: './chef-cat-popup.component.html',
  styleUrls: ['./chef-cat-popup.component.css']
})
export class ChefCatPopupComponent implements OnInit {

  @Input() id;
  dishDetails:any;
  constructor(
    public activeModal: NgbActiveModal,
    private masterService: MasterService
  ) { 

  }

  ngOnInit() {
    
    this.dishDetails = this.masterService.dishes.filter(x => x.Id == this.id);
    console.log(this.id,this.dishDetails);
  }

  oncancel(){
    this.activeModal.dismiss();
  }

  onAdd(){
    this.activeModal.close();
  }

}
