import { CurrencyPipe } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  // @Input() results?: {
  //   year: number,
  //   interest: number,
  //   valueEndOfYear: number,
  //   annualInvestment: number,
  //   totalInterest: number,
  //   totalAmountInvested: number
  // }[]; // this means that the type of results is an array with this type of objects

  private investmentService = inject(InvestmentService);

  get results() {
    return this.investmentService.resultData; // to expose resultData from investmentService through the getter to the template of this component
  }
}
