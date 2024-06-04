import { Component, inject } from '@angular/core';
import { MotionDataService } from '../../services/motion-data.service';
import { MotionDataListComponent } from '../../components/motion-data-list/motion-data-list.component';
import { interval, switchMap } from 'rxjs';

@Component({
  selector: 'app-motion-data-list-page',
  standalone: true,
  imports: [MotionDataListComponent],
  templateUrl: './motion-data-list-page.component.html',
  styleUrl: './motion-data-list-page.component.scss',
})
export class MotionDataListPageComponent {
  private readonly motionDataService = inject(MotionDataService);

  public readonly motionData$ = interval(5000).pipe(
    switchMap(() => this.motionDataService.motionData$),
  );
}
