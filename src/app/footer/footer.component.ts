import {Component} from '@angular/core';
import {MyAccount, MyDataService} from '../services/mydata.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [MyDataService]
})
export class FooterComponent {

  myAccount: MyAccount;

  constructor(private mydata: MyDataService) {
    this.myAccount = mydata.getMyAccount();
  }

}
