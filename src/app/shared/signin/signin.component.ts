import { Component, OnInit, ViewChild } from '@angular/core';

import { FormsModule, ReactiveFormsModule, ValidatorFn } from '@angular/forms';
import { FormControl, FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { AuthService } from '../../services/auth_service/auth.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MasterService } from '../../services/master.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/';
import { AlertsComponent } from '../alerts/alerts.component';
import { alert } from '../models/alert.model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [NgbCarouselConfig]
})
export class SigninComponent implements OnInit {

  public signInForm: FormGroup;
  public signUpForm: FormGroup;
  public forgotForm: FormGroup;
  public loading: Boolean;
  errMsg = '';
  alert: alert= { type: 'success', message: '' };
  @ViewChild('signIn') signIn;
  @ViewChild('signUp') signUp;
  @ViewChild('forgot') forgot;

  constructor(
    private masterSerObj: MasterService,
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private config: NgbCarouselConfig,
    private modalService: NgbModal,
    private activeModal: NgbActiveModal) {

    config.interval = 3000;
    // config.wrap = true;
    // config.keyboard = true;
  }

  ngOnInit() {

    {
      this.signInForm = this.fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
      })
      // reset login status
      this.authService.logout();
    }

    {
      this.signUpForm = this.fb.group({
        username: ['', [Validators.required]],
        email: ['', [Validators.required, this.email()]],
        phone: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
        password: ['', [Validators.required, Validators.pattern(new RegExp("(^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,}))"))]],
        confirmPassword: ['', [Validators.required]]

      });
    }

    {
      this.forgotForm = this.fb.group({
        email: ['', [Validators.required, this.email()]]
      })
    }

    this.signUp.nativeElement.setAttribute('style', 'display:none');
    this.forgot.nativeElement.setAttribute('style', 'display:none');
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

  comparePasswords() {
    let password = this.signUpForm.get('password').value;
    let confirmpwd = this.signUpForm.get('confirmPassword');
    if (password != confirmpwd.value && !confirmpwd.pristine) {
      return true;
    }
    return false;
  }

  showRequiredFieldError(control: string) {
    let formcontrol: AbstractControl = this.signUpForm.get(control);
    if (formcontrol.touched && !formcontrol.valid) {
      return true;
    }
  }

  // Signin Popup Close
  onClose() {
    this.signIn.nativeElement.setAttribute('style', 'display:none');
    this.signUp.nativeElement.setAttribute('style', 'display:none');
    this.forgot.nativeElement.setAttribute('style', 'display:none');
    this.activeModal.dismiss();
  }

  onsignIn(): void {

  }

  onsignUp() {
    console.log(this.signUpForm)
    if (this.signUpForm.valid) {

      var options = {
        "fullName": this.signUpForm.controls.username.value,
        "phoneNumber": this.signUpForm.controls.phone.value,
        "email": this.signUpForm.controls.email.value,
        "password": this.signUpForm.controls.password.value
      }
      console.log(this.signUpForm.controls.username.value, this.signUpForm.controls);
      this.masterSerObj.registerUser(options).subscribe(
        (res: Response) => {
          console.log(res);
          if (res.status) {
            
            const modalRef = this.modalService.open(AlertsComponent);
            this.alert.message = 'Successfully registred.Please check Your email';
            this.alert.type = 'success';
            console.log(this.alert);
            modalRef.componentInstance.alert = this.alert;
            this.onClose();
          }
        },
        err => {
          this.errMsg = err.message
        });
    } else {
      this.errMsg = 'Please fillout valid required fields';
    }
  }

  onForgot(): void {
    //   if(!this.forgotForm.valid){
    //    this.toastr.error('Invalid Email');
    //    return;
    //  }
    //  this.router.navigate(['/signin']);
  }

  showsignin() {
    this.signIn.nativeElement.setAttribute('style', 'display:block');
    this.signUp.nativeElement.setAttribute('style', 'display:none');
    this.forgot.nativeElement.setAttribute('style', 'display:none');
  }

  showsignup() {
    this.signIn.nativeElement.setAttribute('style', 'display:none');
    this.signUp.nativeElement.setAttribute('style', 'display:block');
    this.forgot.nativeElement.setAttribute('style', 'display:none');
  }

  showforgot() {
    this.signIn.nativeElement.setAttribute('style', 'display:none');
    this.signUp.nativeElement.setAttribute('style', 'display:none');
    this.forgot.nativeElement.setAttribute('style', 'display:block');
  }

  onBack() {
    this.signIn.nativeElement.setAttribute('style', 'display:block');
    this.signUp.nativeElement.setAttribute('style', 'display:none');
    this.forgot.nativeElement.setAttribute('style', 'display:none');
  }



}
