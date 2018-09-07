import { Component, OnInit, ViewChild, HostListener } from '@angular/core';

import { FormsModule, ReactiveFormsModule, ValidatorFn } from '@angular/forms';
import { FormControl, FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'util';

import { SigninComponent } from '../shared/signin/signin.component';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-addmanager',
  templateUrl: './addmanager.component.html',
  styleUrls: ['./addmanager.component.css']
})
export class AddmanagerComponent implements OnInit {

  public genders : string[] = [ 'Male', 'Female', 'Other' ];
  public experiences: string[] = [ 'Yes', 'No' ];

  private managerForm: FormGroup;
  private loading: Boolean;

  @ViewChild("head") header;
  
  constructor( private fb: FormBuilder,
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
