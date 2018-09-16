import { Component, OnInit } from '@angular/core';

import { FormsModule, ReactiveFormsModule, ValidatorFn } from '@angular/forms';
import { FormControl, FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  visible: boolean = true;

  public addForm: FormGroup;

  constructor( 
    private fb: FormBuilder,
    private router: Router ) { }

  ngOnInit() {

    this.addForm = this.fb.group({
      fullname: ['', [Validators.required]],
      mobile: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
      address: ['', [Validators.required]],
      landmark: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      pincode: ['', [Validators.required]],

    });

  }

  toggleDiv() {
    this.visible = !this.visible;
  }

  onAdd() {
    
  }

}
