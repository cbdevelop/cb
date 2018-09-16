import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

  @ViewChild('save') save;
  @ViewChild('credit') credit;
  @ViewChild('debit') debit;
  @ViewChild('net') net;
  @ViewChild('other') other;

  constructor() { }

  ngOnInit() {

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

}
