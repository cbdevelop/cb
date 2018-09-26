import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule, ReactiveFormsModule, ValidatorFn } from '@angular/forms';
import { FormControl, FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {

    public genders : string[] = [ 'Male', 'Female', 'Other' ];
    public positionsForm: FormGroup;

  constructor( 
    private fb: FormBuilder, 
    public activeModal: NgbActiveModal ) { }

  ngOnInit() {

    this.positionsForm = this.fb.group({
           
        fullname: ['', [Validators.required]],
        age: ['', [Validators.required]],
        gender: [this.genders[0]],
        phone: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
        email: ['', [Validators.required, this.email()]],
        resume: ['', [Validators.required]],
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

  onCancel() {
      this.activeModal.dismiss();
  }

  onAdd() {
      this.activeModal.close();
  }

}
