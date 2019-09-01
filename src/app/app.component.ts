import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  heading = 'Your Account summary';
  investValue = {title: 'Investment Value', value: 'Sgd 7,977'};
  currentInvestment = {title: 'Current Value', value: 'sgd 2,839'};
  annualReturn = {title: 'Annual Returns', value: '-100.0%'};
  cashBalance = {title: 'Cash Balance', value: 'Sgd 1,097'};
}
