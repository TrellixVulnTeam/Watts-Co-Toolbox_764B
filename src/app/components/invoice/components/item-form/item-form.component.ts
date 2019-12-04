import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';

export interface ItemListModel {
  description: string;
  amount: number;
}

const blankRow: ItemListModel = {description: 'asd', amount: null}

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit {
  editing = {};
  ColumnMode = ColumnMode;
  rows: ItemListModel[] = [
    {description: 'Timber Planks', amount: 4.80},
    {description: 'Lawnmowing', amount: 70},
    {description: 'Edging', amount: 30}];

  // columns: any[] = [
  //   {name: 'Description'},
  //   {name: 'Unit'},
  //   {name: 'Amount'},
  //   {name: 'Total'}];

  constructor() { }

  ngOnInit() {
    
  }

  addRow() {
    this.rows = [blankRow, ...this.rows];
    this.editing = '0-name: true';
  }

  editRow() {
    console.log('Editing: ', this.editing)
  }

  updateValue(event, cell, rowIndex) {
    console.log('inline editing rowIndex', rowIndex);
    this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
    console.log('UPDATED!', this.rows[rowIndex][cell]);
  }
}
