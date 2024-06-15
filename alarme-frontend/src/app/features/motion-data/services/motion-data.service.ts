import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { MotionData } from '../interfaces/motion-data';
import { share } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MotionDataService {
  private readonly http = inject(HttpClient);

  public readonly motionData$ = this.http
    .get<MotionData[]>(`${environment.apiUrl}/motion-data`)
    .pipe(share());
}
