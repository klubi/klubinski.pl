import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-after-hours',
  templateUrl: './after-hours.component.html',
  styleUrls: ['./after-hours.component.css']
})
export class AfterHoursComponent {
  @Input() afterHours: any;
}
