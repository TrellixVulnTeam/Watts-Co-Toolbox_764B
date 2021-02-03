import { Component, OnInit } from '@angular/core';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';

export interface ItemListModel {
  description: string;
  units: number;
  amount: number;
}

const blankRow: ItemListModel = {description: '', units: 0, amount: 0}

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit {
  editing = {};
  currentEditingIndex: number;
  currentEditingCell: string;
  ColumnMode = ColumnMode;
  SelectionType = SelectionType;
  selected = [];
  totalAmount: number;
  rows: ItemListModel[] = [
    {description: 'Timber Planks', units: 1, amount: 4.80},
    {description: 'Lawnmowing', units: 1, amount: 70},
    {description: 'Edging', units: 1, amount: 30}];

  constructor() { }

  ngOnInit() {
    this.evaluateTotalAmount()
  }

  addRow() {
    this.rows = [blankRow, ...this.rows];
    this.editing = {'0-description': true};
  }

  deleteRow(index) {
    this.rows.splice(index, 1);
    this.rows = [...this.rows];
  }

  deselectAllCellsInRow(rowIndex) {
    this.editing[rowIndex + '-description'] = false;
    this.editing[rowIndex + '-amount'] = false;
    this.editing[rowIndex + '-units'] = false;
  }

  updateValue(event, cell, rowIndex) {
    this.editing[rowIndex + '-' + cell] = false;
    if (cell !== 'description' && event.target.value) this.rows[rowIndex][cell] = parseFloat(event.target.value)
    else this.rows[rowIndex][cell] = event.target.value ? event.target.value : '-';
    this.rows = [...this.rows];
    this.evaluateTotalAmount()
  }

  clickTable(event) {
    let clickedItem = event.target.localName;

    // Deselect and close input box when clicking away.
    // Done as a workaround for a bug where double clicking then clicking away doesn't close the input
    if(Object.getOwnPropertyNames(this.editing).length && clickedItem !== 'input') {
      let inputBox = document.getElementById(this.currentEditingCell);
      if (inputBox) {
        this.editing = {};
        inputBox.blur();
      }
    } else {
      // console.log('close editing')
    }
  }

  doubleClickOnCell(rowIndex, cell) {
    this.editing[rowIndex + '-' + cell] = true;
    this.currentEditingIndex = rowIndex;
    this.currentEditingCell = cell;
  }

  evaluateTotalAmount() {
    let total: number = 0;
    this.rows.forEach(row => {
      console.log(row.amount)
      total += row.amount
    })
    this.totalAmount = total;
  }
}
