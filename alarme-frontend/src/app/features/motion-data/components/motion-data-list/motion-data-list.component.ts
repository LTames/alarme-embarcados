import { Component, Input } from '@angular/core';
import { MotionData } from '../../interfaces/motion-data';
import { Table, TableModule } from 'primeng/table';
import { DatePipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'motion-data-list',
  standalone: true,
  imports: [
    TableModule,
    DatePipe,
    ButtonModule,
    InputTextModule,
    FormsModule,
    TableModule,
    TagModule,
    IconFieldModule,
    InputTextModule,
    InputIconModule,
    MultiSelectModule,
    DropdownModule,
    CommonModule,
  ],
  templateUrl: './motion-data-list.component.html',
  styleUrl: './motion-data-list.component.scss',
})
export class MotionDataListComponent {
  @Input({ required: true }) motionData: MotionData[] = [];

  public columns = [
    { field: 'id', header: 'ID' },
    { field: 'sensorName', header: 'Nome do sensor' },
    { field: 'timestamp', header: 'Data / Hora' },
  ];
  public searchValue = '';

  public clearFilter(table: Table) {
    table.clear();
    this.searchValue = '';
  }
}
