import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { FormsModule, ReactiveFormsModule, ValidatorFn } from '@angular/forms';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

  public savedForm: FormGroup;
  public creditForm: FormGroup;
  public debitForm: FormGroup;
  public netForm: FormGroup;
  public otherForm: FormGroup;

  public dates: string[] = [ 'MM', '1', '2', '3', '4' ];
  public years: string[] = [ 'YYYY', '2030', '2029', '2028', '2027' ];
  public banks: string[] = [ '---- Select Bank ----', 'Indian Bank', 'Bank of Baroda', 'Telangana Bank', 'Vijaya Bank' ];

  @ViewChild('save') save;
  @ViewChild('credit') credit;
  @ViewChild('debit') debit;
  @ViewChild('net') net;
  @ViewChild('other') other;

  constructor( private fb: FormBuilder,
    private router: Router,
    private _masterService: MasterService ) { }

  ngOnInit() {

    {
      this.savedForm = this.fb.group({
        amountType: ['', Validators.required],
        totalAmount: ['', Validators.required],
        savedCard: ['', Validators.required],
        cvv: ['', Validators.required]
      });
    }

    {
      this.creditForm = this.fb.group({
        amountType: ['', Validators.required],
        totalAmount: ['', Validators.required],
        cardNumber: ['', Validators.required],
        cardName: ['', Validators.required],
        expirationDate: [this.dates[0]],
        expirationYear: [this.years[0]],
        saveCard: ['', Validators.required],
        cvv: ['', Validators.required]
      });
    }

    {
      this.debitForm = this.fb.group({
        amountType: ['', Validators.required],
        totalAmount: ['', Validators.required],
        cardNumber: ['', Validators.required],
        cardName: ['', Validators.required],
        expirationDate: [this.dates[0]],
        expirationYear: [this.years[0]],
        saveCard: ['', Validators.required],
        cvv: ['', Validators.required]
      });
    }

    {
      this.netForm = this.fb.group({
        amountType: ['', Validators.required],
        totalAmount: ['', Validators.required],
        axisBank: ['', Validators.required],
        iciciBank: ['', Validators.required],
        hdfcBank: ['', Validators.required],
        andhraBank: ['', Validators.required],
        yesBank: ['', Validators.required],
        sbiBank: ['', Validators.required],
        otherBank: [this.banks[0]]
      });
    }

    {
      this.otherForm = this.fb.group({
        amountType: ['', Validators.required],
        totalAmount: ['', Validators.required],
        mobiKwik: ['', Validators.required],
        jio: ['', Validators.required],
        paytm: ['', Validators.required],
        phonePe: ['', Validators.required],
        payU: ['', Validators.required],
        amazonPay: ['', Validators.required]
      });
    }

    this.save.nativeElement.setAttribute('style', 'display:none');
    this.debit.nativeElement.setAttribute('style', 'display:none');
    this.net.nativeElement.setAttribute('style', 'display:none');
    this.other.nativeElement.setAttribute('style', 'display:none');
  }

  savedCard() {
  this.save.nativeElement.setAttribute('style', 'display:block');
  this.credit.nativeElement.setAttribute('style', 'display:none');
  this.debit.nativeElement.setAttribute('style', 'display:none');
  this.net.nativeElement.setAttribute('style', 'display:none');
  this.other.nativeElement.setAttribute('style', 'display:none');
  }

  creditCard() {
    this.save.nativeElement.setAttribute('style', 'display:none');
    this.credit.nativeElement.setAttribute('style', 'display:block');
    this.debit.nativeElement.setAttribute('style', 'display:none');
    this.net.nativeElement.setAttribute('style', 'display:none');
    this.other.nativeElement.setAttribute('style', 'display:none');
  }

  debitCard() {
    this.save.nativeElement.setAttribute('style', 'display:none');
    this.credit.nativeElement.setAttribute('style', 'display:none');
    this.debit.nativeElement.setAttribute('style', 'display:block');
    this.net.nativeElement.setAttribute('style', 'display:none');
    this.other.nativeElement.setAttribute('style', 'display:none');
  }

  netBanking() {
    this.save.nativeElement.setAttribute('style', 'display:none');
    this.credit.nativeElement.setAttribute('style', 'display:none');
    this.debit.nativeElement.setAttribute('style', 'display:none');
    this.net.nativeElement.setAttribute('style', 'display:block');
    this.other.nativeElement.setAttribute('style', 'display:none');
  }

  otherWallets() {
    this.save.nativeElement.setAttribute('style', 'display:none');
    this.credit.nativeElement.setAttribute('style', 'display:none');
    this.debit.nativeElement.setAttribute('style', 'display:none');
    this.net.nativeElement.setAttribute('style', 'display:none');
    this.other.nativeElement.setAttribute('style', 'display:block');
  }

  onSaved() {

  }
  onCredit() {

  }

  onDebit() {

  }
  onNet() {

  }

  onOther() {

  }

  onMakePayment() {
    alert('payment');
    const options = {};
    this._masterService.proceedToPayalPayment(options).subscribe(
      (res: Response) => {
        console.log(res);
    });
  }

}
