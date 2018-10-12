import { Component, OnInit } from '@angular/core';
import { MasterService } from '../services/master.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(
    private masterObj: MasterService
  ) { }

  ngOnInit() {
    console.log(this.masterObj.selectedDishArr, this.masterObj.eventManagerList, this.masterObj.searchObj);
  }

}
