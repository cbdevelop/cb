import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormsModule, ReactiveFormsModule, ValidatorFn } from '@angular/forms';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangePasswordComponent implements OnInit {

  public passwordForm: FormGroup;

  constructor( private fb: FormBuilder,
    private router: Router ) { }

  ngOnInit() {

    {
      this.passwordForm = this.fb.group({
        currentPassword: ['', Validators.required],
        newPassword: ['', [Validators.required, Validators.pattern(new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,20})"))]],
        confirmPassword: ['', Validators.required]
      })
    }

  }

  onCancel() {
    this.router.navigate(['/profile'])
  }

  onPassword() {
    
  }
}
