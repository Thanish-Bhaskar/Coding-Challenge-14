//calculate loan payment

export function calculateLoanPayment(principal, rate, n) {
    const monthlyRate = rate / 12;
    return (principal * monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1);
}
