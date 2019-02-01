import { Component, OnInit } from '@angular/core';

import { Dragon } from '../../../models/entities/_index';
import { DragonService } from '../../../services/_index';
import { BackEndFeedback } from '../../../models/application/_index';

@Component({
  selector: 'app-dragon',
  templateUrl: './dragon.component.html',
  styleUrls: ['./dragon.component.scss']
})
export class DragonComponent implements OnInit {

  public backEndFeedback: BackEndFeedback = {};
  public dragons: Dragon[] = [];

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
          });
          this.orderByName();
          this.backEndFeedback.errorMessage = null;
          this.backEndFeedback.loading = false;
        },
        (error) => {
          this.backEndFeedback.errorMessage = error;
          this.backEndFeedback.loading = false;
        }
      );
  }

  orderByName() {
    this.dragons = this.dragons.sort((n1, n2) => {
      if (n1.name > n2.name) {
        return 1;
      }

      if (n1.name < n2.name) {
        return -1;
      }

      return 0;
    });
  }
}
