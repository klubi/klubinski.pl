import {Component} from '@angular/core';
import {MyAccount, MyDataService} from '../services/mydata.service';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css'],
  providers: [MyDataService]
})
export class RightComponent {

  myAccount: MyAccount;

  constructor(myDataService: MyDataService) {
    this.myAccount = myDataService.getMyAccount();
  }
}
