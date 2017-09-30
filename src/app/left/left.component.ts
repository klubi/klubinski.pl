import {Component} from '@angular/core';
import {MyAccount, MyDataService} from '../services/mydata.service';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css'],
  providers: [MyDataService]
})
export class LeftComponent {

  myAccount: MyAccount;

  constructor(private mydata: MyDataService) {
    this.myAccount = mydata.getMyAccount();
  }

  getEmpty(level) {
    return new Array(5 - level);
  }

  getFull(level) {
    return new Array(level);
  }
}
