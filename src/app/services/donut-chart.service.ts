import { Injectable } from '@angular/core';
import { Requirement } from '../interfaces/Requirement';
import { RequirementService } from './requirement.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonutChartService {
  requirements: Requirement[] = [];
  donutChartData: number[] = [0, 0];

  constructor(private requirementService: RequirementService) {}

  private fetchRequirements(): Observable<number[]> {
    return new Observable<number[]>((observer) => {
      this.requirementService.getAllRequirements().subscribe(
        (data) => {
          this.requirements = data;

          let totalFulfilled = 0;
          let totalRequired = 0;

          this.requirements.forEach((requirement) => {
            totalFulfilled += requirement.fulfilledNo;
            totalRequired += requirement.requiredNo;
          });

          const fulfilledPercentage = (totalFulfilled / totalRequired) * 100;
          const remainingPercentage = 100 - fulfilledPercentage;

          this.donutChartData = [fulfilledPercentage, remainingPercentage];
          observer.next(this.donutChartData);
          observer.complete();
        },
        (error) => {
          console.error('Error loading data', error);
          observer.error(error);
        }
      );
    });
  }

  getDummyData(): Observable<{ name: string, value: number }[]> {
    return new Observable<{ name: string, value: number }[]>((observer) => {
      this.fetchRequirements().subscribe(
        (data) => {
          console.log(this.donutChartData[0]);
          console.log(this.donutChartData[1]);
          observer.next([
            { name: 'Fulfillment achieved', value: this.donutChartData[0] },
            { name: 'Fulfillment left', value: this.donutChartData[1] }
          ]);
          observer.complete();
        },
        (error) => {
          observer.error(error);
        }
      );
    });
  }
}
