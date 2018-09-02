import { Component, OnInit, HostListener } from '@angular/core';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-result-view',
  templateUrl: './result-view.component.html',
  styleUrls: ['./result-view.component.css']
})
export class ResultViewComponent implements OnInit {


  dishes: any = []
  constructor(private service: MasterService) {

  }

  ngOnInit() {
    console.log(this.service);
    this.dishes = this.service.dishes;
  }




}
