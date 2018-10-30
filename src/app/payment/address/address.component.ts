import { Component, OnInit } from '@angular/core';

import { FormsModule, ReactiveFormsModule, ValidatorFn } from '@angular/forms';
import { FormControl, FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { MasterService } from '../../services/master.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertsComponent } from '../../shared/alerts/alerts.component';
import { alert } from '../../shared/models/alert.model';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  private visible: boolean = true;

  public addForm: FormGroup;
  alert: alert = { type: 'success', message: '' };

  constructor( 
    private fb: FormBuilder,
    private router: Router,
    private masterObj: MasterService,
    private addressModel: NgbModal ) { }

  ngOnInit() {

    this.addForm = this.fb.group({
      fullname: ['', [Validators.required]],
      mobile: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
      address: ['', [Validators.required]],
      landmark: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      pincode: ['', [Validators.required, Validators.pattern('[0-9]{6}|[0-9]{3}\s[0-9]{3}')]],

    });

  }

  // Toggle Address
  toggleDiv() {
    this.visible = !this.visible;
  }

  // Add Address 
  addressAdd() {
       // str.toUpperCase
       if (this.addForm.valid) {

        const options = {
          'fullName': this.addForm.controls.fullname.value,
          'phoneNumber': this.addForm.controls.mobile.value,
          'address': this.addForm.controls.address.value, 
          'landmark': this.addForm.controls.landmark.value, 
          'city': this.addForm.controls.city.value,
          'state': this.addForm.controls.state.value,
          'pinCode': this.addForm.controls.pincode.value,
        };
        console.log(options);
        this.masterObj.addAddress(options).subscribe(
          (res: Response) => {
            console.log(res);
            if (res.status) {
              this.addForm.reset();
              const modalRef = this.addressModel.open(AlertsComponent);
              this.alert.message = 'Successfully added Address.';
              this.alert.type = 'success';
              modalRef.componentInstance.alert = this.alert;
            }
          },
          (err) => {
            console.log(err);
            const modalRef = this.addressModel.open(AlertsComponent);
            this.alert.type = 'danger';
            this.alert.message = err.error.message;
            modalRef.componentInstance.alert = this.alert;
          }
        );
      }
    }
    
  }