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
    public masterObj:MasterService,
    private router:Router,
    private commentService: NgbModal,
  ) { 
  }

  ngOnInit() {
    this.masterObj.chef_eventmanager_flag = 'Chef';
    console.log(this.masterObj.chef_eventmanager_flag);
  }
  onproceed(){
    this.router.navigate(['./manager']);
  }
  onCommentPopup() {
    this.commentService.open(CommentsComponent);
  }

  opencat() {
    this.commentService.open(MobilePreviewComponent);
  }

  
}
