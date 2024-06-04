import { Component, Input } from '@angular/core';
import { MotionData } from '../../interfaces/motion-data';

@Component({
  selector: 'motion-data-list',
  standalone: true,
  imports: [],
  templateUrl: './motion-data-list.component.html',
  styleUrl: './motion-data-list.component.scss',
})
export class MotionDataListComponent {
  @Input({ required: true }) motiondata: MotionData[] = [];
}
