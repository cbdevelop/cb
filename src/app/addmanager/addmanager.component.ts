import { Component, OnInit, ViewChild, HostListener } from '@angular/core';

import { FormsModule, ReactiveFormsModule, ValidatorFn } from '@angular/forms';
import { FormControl, FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'util';

import { SigninComponent } from '../shared/signin/signin.component';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MasterService } from '../services/master.service';
import { AlertsComponent } from '../shared/alerts/alerts.component';
import { alert } from '../shared/models/alert.model';

@Component({
  selector: 'app-addmanager',
  templateUrl: './addmanager.component.html',
  styleUrls: ['./addmanager.component.css']
})
export class AddmanagerComponent implements OnInit {

  public genders : string[] = [ 'Male', 'Female', 'Other' ];
  public experiences: string[] = [ 'Yes', 'No' ];
  alert: alert = { type: 'success', message: '' };
  public managerForm: FormGroup;
  public loading: Boolean;
  
  isCollapsed = false;
  @ViewChild("head") header;
  
  constructor( 
    private masterSerObj:MasterService,
    private fb: FormBuilder,
    private router: Router,
    private signinModel: NgbModal ) {}

  ngOnInit() {

    this.managerForm = this.fb.group({
           
      fullname: ['', [Validators.required]],
      age: ['', [Validators.required]],
      gender: [this.genders[0]],
      phone: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
      email: ['', [Validators.required, this.email()]],
      state: ['', [Validators.required]],
      city: ['', [Validators.required]],
      experience: [this.experiences[0]],
      about: ['', [Validators.required]]
  });

}


private email(): ValidatorFn {
  return (control) => {
      let email = control.value ? control.value : null;
      let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!isNullOrUndefined(email)) {
          if (!pattern.test(email)) {
              return { 'email': true };
          }
      }
      return null
  };
}

showRequiredFieldError(control: string) {
  let formcontrol: AbstractControl = this.managerForm.get(control);
  if (formcontrol.touched && !formcontrol.valid) {
    return true;
  }
}

onManager() {
    var str: string;
    // str.toUpperCase
    if (this.managerForm.valid) {

      var options = {
        "fullName": this.managerForm.controls.fullname.value,
        "phoneNumber": this.managerForm.controls.phone.value,
        "age": this.managerForm.controls.age.value,
        "gender": this.managerForm.controls.gender.value.toUpperCase(),
        "email": this.managerForm.controls.email.value,
        "state": this.managerForm.controls.state.value,
        "city": this.managerForm.controls.city.value,
        "experienceInEvents": this.managerForm.controls.experience.value.toUpperCase(),
        "aboutYourSelf": this.managerForm.controls.about.value,
      }
      console.log(options);
      this.masterSerObj.registerManager(options).subscribe(
        (res: Response) => {
          console.log(res);
          if (res.status) {

            const modalRef = this.signinModel.open(AlertsComponent);
            this.alert.message = 'Successfully registred.We will revert back to you';
            this.alert.type = 'success';
            modalRef.componentInstance.alert = this.alert;
            this.managerForm.reset();
          }
        },
        (err) => {
          console.log(err);
          const modalRef = this.signinModel.open(AlertsComponent);
          this.alert.type = 'danger';
          this.alert.message = err.error.message;
          modalRef.componentInstance.alert = this.alert;
        }
      );
    }

}

  // Sign-in Open
  openSign() {
    this.signinModel.open(SigninComponent);
  }

@HostListener("window:scroll", [])
onWindowScroll() {
  const number = window.pageYOffset || window.scrollY || 0;

  if (number >= 100) {
    this.header.nativeElement.classList.add("scrollAct");
    // document.getElementById('header').classList.add("scrollAct");
  } else if (number < 200) {
    // document.getElementById('header').classList.remove("scrollAct");
    this.header.nativeElement.classList.remove("scrollAct");
  }
}

}
