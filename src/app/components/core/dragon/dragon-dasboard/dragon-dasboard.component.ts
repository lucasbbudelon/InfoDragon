import { Component, OnInit } from '@angular/core';

import { Dragon } from '../../../../models/entities/_index';
import { DragonService } from '../../../../services/_index';
import { BackEndFeedback } from '../../../../models/application/_index';

@Component({
  selector: 'app-dragon-dasboard',
  templateUrl: './dragon-dasboard.component.html',
  styleUrls: ['./dragon-dasboard.component.scss']
})
export class DragonDasboardComponent implements OnInit {

  public backEndFeedback: BackEndFeedback = {};
  public dragons: Dragon[] = [];
  public chartByType: any = { label: [], data: [] };
  public chartByHistories: any = { label: [], data: [] };

  constructor(private dragonService: DragonService) { }

  ngOnInit() {
    this.loadDragons();
  }

  loadDragons() {
    this.backEndFeedback.loading = true;
    this.dragonService.getAll()
      .subscribe(
        (success) => {
          success.forEach(dragon => {
            this.dragons.push(dragon);
            this.addItemChartByType(dragon);
            this.addItemChartByHistories(dragon);
          });
          this.backEndFeedback.errorMessage = null;
          this.backEndFeedback.loading = false;
        },
        (error) => {
          this.backEndFeedback.errorMessage = error;
          this.backEndFeedback.loading = false;
        }
      );
  }

  addItemChartByType(dragon: Dragon) {
    const index = this.chartByType.label.indexOf(dragon.type);

    if (index === -1) {
      this.chartByType.label.push(dragon.type);
      this.chartByType.data.push(1);
    } else {
      this.chartByType.data[index]++;
    }
  }

  addItemChartByHistories(dragon: Dragon) {
    dragon.histories.forEach(historie => {
      const index = this.chartByHistories.label.indexOf(historie);

      if (index === -1) {
        this.chartByHistories.label.push(historie);
        this.chartByHistories.data.push(1);
      } else {
        this.chartByHistories.data[index]++;
      }
    });
  }
}
