import { Component, OnInit, ViewChild, HostListener } from '@angular/core';

import { FormsModule, ReactiveFormsModule, ValidatorFn } from '@angular/forms';
import { FormControl, FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'util';

import { SigninComponent } from '../shared/signin/signin.component';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MasterService } from '../services/master.service';
import { Response } from '@angular/http';
import { alert } from '../shared/models/alert.model';
import { AlertsComponent } from '../shared/alerts/alerts.component';

@Component({
  selector: 'app-addchef',
  templateUrl: './addchef.component.html',
  styleUrls: ['./addchef.component.css']
})
export class AddchefComponent implements OnInit {

  public genders: string[] = ['Male', 'Female', 'Other'];
  public experiences: string[] = ['Yes', 'No'];

  public chefForm: FormGroup;
  public loading: Boolean;
  alert: alert = { type: 'success', message: '' };

  @ViewChild("head") header;

  constructor(
    private masterObj: MasterService,
    private fb: FormBuilder,
    private router: Router,
    private signinModel: NgbModal) { }


  ngOnInit() {

    this.chefForm = this.fb.group({

      fullname: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
      gender: [this.genders[0]],
      phone: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
      email: ['', [Validators.required, this.email()]],
      state: ['', [Validators.required]],
      city: ['', [Validators.required]],
      cuisine: ['', [Validators.required]],
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
    let formcontrol: AbstractControl = this.chefForm.get(control);
    if (formcontrol.touched && !formcontrol.valid) {
      return true;
    }
  }

  onChef() {

  }
  // register chef

  registerChef() {
    var str: string;
    // str.toUpperCase
    if (this.chefForm.valid) {

      var options = {
        "fullName": this.chefForm.controls.fullname.value,
        "phoneNumber": this.chefForm.controls.phone.value,
        "age": this.chefForm.controls.age.value,
        "gender": this.chefForm.controls.gender.value.toUpperCase(),
        "email": this.chefForm.controls.email.value,
        "state": this.chefForm.controls.state.value,
        "city": this.chefForm.controls.city.value,
        "expertiseIn": this.chefForm.controls.cuisine.value,
        "experienceInOutdoor": this.chefForm.controls.experience.value.toUpperCase(),
        "aboutYourSelf": this.chefForm.controls.about.value,
      }
      console.log(options);
      this.masterObj.registerChef(options).subscribe(
        (res: Response) => {
          console.log(res);
          if (res.status) {
            this.chefForm.reset();
            const modalRef = this.signinModel.open(AlertsComponent);
            this.alert.message = 'Successfully registred.We will revert back to you';
            this.alert.type = 'success';
            modalRef.componentInstance.alert = this.alert;
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
