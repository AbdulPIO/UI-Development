import { Injectable } from '@angular/core';

import type { InvestmentInput } from './investment-input.model';

@Injectable({ providedIn: 'root' }) // makes sure that angular is able to inject that service and components can request that service to be injected
export class InvestmentService {
    resultData?: {
        year: number,
        interest: number,
        valueEndOfYear: number,
        annualInvestment: number,
        totalInterest: number,
        totalAmountInvested: number
    }[]


    calculateInvestmentResults(data: InvestmentInput) {
        // destrucutring
        const { initialInvestment, annualInvestment, expectedReturn, duration } = data;
        const annualData = [];
        let investmentValue = initialInvestment;

        for (let i = 0; i < duration; i++) {
            const year = i + 1;
            const interestEarnedInYear = investmentValue * (expectedReturn / 100);
            investmentValue += interestEarnedInYear + annualInvestment;
            const totalInterest =
                investmentValue - annualInvestment * year - initialInvestment;
            annualData.push({
                year: year,
                interest: interestEarnedInYear,
                valueEndOfYear: investmentValue,
                annualInvestment: annualInvestment,
                totalInterest: totalInterest,
                totalAmountInvested: initialInvestment + annualInvestment * year,
            });
        }

        // this.resultsData.set(annualData);
        this.resultData = annualData;
    }
}
