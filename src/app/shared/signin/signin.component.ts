import { Component, OnInit, ViewChild } from '@angular/core';

import { FormsModule, ReactiveFormsModule, ValidatorFn } from '@angular/forms';
import { FormControl, FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { AuthService } from '../../services/auth_service/auth.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

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

  @ViewChild('signIn') signIn;
  @ViewChild('signUp') signUp;
  @ViewChild('forgot') forgot;

  constructor( 
    private fb: FormBuilder,
    private router: Router, 
    private authService: AuthService,
    private config: NgbCarouselConfig,
    private activeModal: NgbActiveModal ) {

    config.interval = 3000;
    config.wrap = true;
    config.keyboard = true;
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
      password: ['', [Validators.required, Validators.pattern(new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,20})"))]],
      confirmPassword: ['', [Validators.required]]

    });
  }

  {
    this.forgotForm = this.fb.group({
      email: ['', [Validators.required, this.email()]]
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
  this.activeModal.close();
}

onsignIn(): void {
//   if(!this.signInForm.valid){
//    this.toastr.error('Invalid Credentials');
//    return;
//  }

//  this.loading = true;
//  this.authService.login(this.signInForm.value)
//    .subscribe((data) => {
//      if(data) {
//        this.toastr.success('SignIn Successful');
//       //  this.router.navigate(['/header']);
//      }
//      else 
//        this.toastr.error('SignIn Unsuccessful');
//        this.loading = false;
//    });

} 

onsignUp() {
//   if(!this.signUpForm.valid || (this.signUpForm.controls.password.value != this.signUpForm.controls.confirmPassword.value)){
//    this.toastr.error('Invalid Credentials');
//    return;
//  }

//  this.loading = true;
//  this.userService.register(this.signUpForm.value)
//  .subscribe((data: any) => {
//    if(data.success == true) {
//      this.toastr.success('SignUp Successful');
//      this.router.navigate(['/signin']);
//    }
//    else 
//    this.toastr.error('SignUp Unsuccessful');
//    this.loading = false;
//  });
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


  // onpopup() {

    
  //   document.getElementById('slideshow').style.display = "block";
  //   document.getElementById('signPop').style.display = "block";
  //   document.getElementById('signIn').style.display = "block";
  //   document.getElementById('forgotPass').style.display = "none";
  //   document.getElementById('signUp').style.display = "none";
    
  // }

  // showsignup(){
  //   document.getElementById('slideshow').style.display = "block";
  //   document.getElementById('signPop').style.display = "block";
  //   document.getElementById('signIn').style.display = "none";
  //   document.getElementById('forgotPass').style.display = "none";
  //   document.getElementById('signUp').style.display = "block";
  // }

  // showforgot(){
  //   document.getElementById('slideshow').style.display = "block";
  //   document.getElementById('signPop').style.display = "block";
  //   document.getElementById('signIn').style.display = "none";
  //   document.getElementById('forgotPass').style.display = "block";
  //   document.getElementById('signUp').style.display = "none";
  // }

  // popupClose(){
  //   document.getElementById('signPop').style.display = "none";
  //   document.getElementById('slideshow').style.display = "none";
  //   document.getElementById('signIn').style.display = "none";
  //   document.getElementById('forgotPass').style.display = "none";
  //   document.getElementById('signUp').style.display = "none";
  // }

}
