import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormsModule, ReactiveFormsModule, ValidatorFn } from '@angular/forms';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { isNullOrUndefined } from 'util';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public profileForm: FormGroup;

  public genders : string[] = [ 'Male', 'Female', 'Other' ];

  constructor( private fb: FormBuilder,
    private router: Router ) { }

  ngOnInit() {

    {
      this.profileForm = this.fb.group({
        fullName: ['', Validators.required],
        email: ['', [Validators.required, this.email()]],
        mobile:  ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
        gender: [this.genders[0]],
      })
    }

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

  onProfile() {
    
  }
}
