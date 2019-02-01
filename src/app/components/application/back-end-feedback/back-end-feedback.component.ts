import { Component, Input, OnInit } from '@angular/core';

import { BackEndFeedback } from '../../../models/application/_index';

@Component({
  selector: 'app-back-end-feedback',
  templateUrl: './back-end-feedback.component.html',
  styleUrls: ['./back-end-feedback.component.scss']
})

export class BackEndFeedbackComponent implements OnInit {

  @Input() model: BackEndFeedback;
  @Input() size: string;

  constructor() { }

  ngOnInit() {
  }
}
