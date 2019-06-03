import { Component, Input } from '@angular/core';
import { BackEndFeedback } from '../../components/back-end-feedback/backEndFeedback';

@Component({
  selector: 'app-back-end-feedback',
  templateUrl: './back-end-feedback.component.html',
  styleUrls: ['./back-end-feedback.component.scss']
})

export class BackEndFeedbackComponent {

  @Input() model: BackEndFeedback;
  @Input() size: string;

  constructor() { }
}
