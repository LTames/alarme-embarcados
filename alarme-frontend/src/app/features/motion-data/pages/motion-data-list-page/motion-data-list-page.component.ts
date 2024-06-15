import { Component, inject } from '@angular/core';
import { MotionDataService } from '../../services/motion-data.service';
import { MotionDataListComponent } from '../../components/motion-data-list/motion-data-list.component';
import { concatMap, interval, startWith, map } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ChartModule } from 'primeng/chart';
import { MotionData } from '../../interfaces/motion-data';

@Component({
  selector: 'app-motion-data-list-page',
  standalone: true,
  imports: [MotionDataListComponent, AsyncPipe, ChartModule],
  templateUrl: './motion-data-list-page.component.html',
  styleUrl: './motion-data-list-page.component.scss',
})
export class MotionDataListPageComponent {
  private motionDataService = inject(MotionDataService);

  public motionData$ = interval(2500).pipe(
    startWith(null),
    concatMap(() => this.motionDataService.motionData$),
  );

  public chartData$ = this.motionData$.pipe(
    map((motionData) => {
      const aggregatedData = this.aggregateByMonth(motionData);
      return {
        labels: aggregatedData.labels,
        datasets: [
          {
            label: 'Ocorrências',
            data: aggregatedData.data,
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            fill: false,
          },
        ],
      };
    }),
  );

  public chartConfig = {
    animation: false,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Mês',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Ocorrências',
        },
        beginAtZero: true,
      },
    },
  };

  private aggregateByMonth(motionData: MotionData[]) {
    const monthlyData = {} as any;

    motionData.forEach((data) => {
      const month = new Date(data.timestamp).getMonth();

      if (!monthlyData[month]) {
        monthlyData[month] = 0;
      }
      monthlyData[month]++;
    });

    const labels: string[] = [];
    const data: number[] = [];

    for (let month = 0; month < 12; month++) {
      if (monthlyData[month]) {
        labels.push(
          new Date(2000, month, 1).toLocaleString('pt-BR', { month: 'long' }),
        );
        data.push(monthlyData[month]);
      } else {
        labels.push(
          new Date(2000, month, 1).toLocaleString('pt-BR', { month: 'long' }),
        );
        data.push(0);
      }
    }

    return { labels, data };
  }
}
