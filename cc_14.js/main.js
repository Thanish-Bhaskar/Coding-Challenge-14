// U08201790

import { calculateInterest } from './interestRate.js';
import { calculateLoanPayment } from './loanPayment.js';
import { calculateInvestmentReturn } from './investmentReturn.js';

document.addEventListener('DOMContentLoaded', () => {
    const interestForm = document.getElementById('interest-form');
    const loanForm = document.getElementById('loan-form');
    const investmentForm = document.getElementById('investment-form');

    interestForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const principal = parseFloat(document.getElementById('interest-principal').value);
        const rate = parseFloat(document.getElementById('interest-rate').value);
        const time = parseFloat(document.getElementById('interest-time').value);

        if (validateInputs([principal, rate, time])) {
            const interest = calculateInterest(principal, rate, time);
            document.getElementById('interest-result').textContent = `Interest: ${interest.toFixed(2)}`;
        } else {
            alert('Please enter valid numbers');
        }
    });

    loanForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const principal = parseFloat(document.getElementById('loan-principal').value);
        const rate = parseFloat(document.getElementById('loan-rate').value) / 100;
        const time = parseFloat(document.getElementById('loan-time').value);

        if (validateInputs([principal, rate, time])) {
            const payment = calculateLoanPayment(principal, rate, time * 12);
            document.getElementById('loan-result').textContent = `Monthly Payment: ${payment.toFixed(2)}`;
        } else {
            alert('Please enter valid numbers');
        }
    });

    investmentForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const principal = parseFloat(document.getElementById('investment-principal').value);
        const rate = parseFloat(document.getElementById('investment-rate').value) / 100;
        const n = parseFloat(document.getElementById('investment-n').value);
        const t = parseFloat(document.getElementById('investment-time').value);

        if (validateInputs([principal, rate, n, t])) {
            const amount = calculateInvestmentReturn(principal, rate, n, t);
            document.getElementById('investment-result').textContent = `Future Value: ${amount.toFixed(2)}`;
        } else {
            alert('Please enter valid numbers');
        }
    });

    function validateInputs(inputs) {
        return inputs.every(input => !isNaN(input) && input > 0);
    }
});
