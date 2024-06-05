import { Component, inject } from '@angular/core';
import { MotionDataService } from '../../services/motion-data.service';
import { MotionDataListComponent } from '../../components/motion-data-list/motion-data-list.component';
import { concatMap, interval, startWith } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-motion-data-list-page',
  standalone: true,
  imports: [MotionDataListComponent, AsyncPipe],
  templateUrl: './motion-data-list-page.component.html',
  styleUrl: './motion-data-list-page.component.scss',
})
export class MotionDataListPageComponent {
  private readonly motionDataService = inject(MotionDataService);

  public readonly motionData$ = interval(5000).pipe(
    startWith(null),
    concatMap(() => this.motionDataService.motionData$),
  );
}
