import { Component, Input } from '@angular/core';
import { DataGenre } from 'src/app/interfaces/data-structure/data-genre';
import { Output, EventEmitter } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import { NgFor } from '@angular/common';
import { DataRomantic } from 'src/app/interfaces/data-structure/data-romantic';
import { DataSexuality } from 'src/app/interfaces/data-structure/data-sexuality';
import { DataExplicit } from 'src/app/interfaces/data-structure/data-explicit';
import { DropdownSelects } from 'src/app/interfaces/story-structure/dropdown-selects';

@Component({
  imports: [ MatSelectModule,  NgFor],
  standalone: true,
  selector: 'app-list-select',
  templateUrl: './list-select.component.html',
  styleUrls: ['./list-select.component.css']
})
export class ListSelectComponent {
  @Input() genres?: DataGenre[];
  @Input() romantics?: DataRomantic[];
  @Input() sexualitys?: DataSexuality[];
  @Input() explicits?: DataExplicit[];

  selectedGenre?: number = undefined;
  selectedRomantic?: number = undefined;
  selectedSexuality?: number = undefined;
  selectedExplicit?: number = undefined;

  @Output() newItemEvent = new EventEmitter<DropdownSelects>();

  addNewItem(value: DropdownSelects) {
    this.newItemEvent.emit(value);
  }
}
