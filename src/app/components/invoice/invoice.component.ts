import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {4
  // Invoice Details
  public invoiceNumber: Number;
  public dueDate = Date.now;
  public invoiceDate = Date.now;

  // Client Details
  public name: string;
  public address: string;
  public city: string;
  public postcode: string;
  public email: string;
  
  // Notes
  public notes: string;


  constructor() { }

  ngOnInit() {
  }

  createInvoice() {
    console.log("--Create Invoice--")
    console.log('Invoice No. -> ' + this.invoiceNumber);
    console.log('Invoice Date -> ' + this.invoiceDate);
    console.log('Due Date -> ' + this.dueDate);
    console.log('-----------------------------');
    console.log('Name -> ' + this.name);
    console.log('Address -> ' + this.address);
    console.log('City -> ' + this.city);
    console.log('Postcode -> ' + this.postcode);
    console.log('-----------------------------');
    console.log('Notes -> ' + this.notes);
    console.log('Client Email -> ' + this.email);
  }

}
