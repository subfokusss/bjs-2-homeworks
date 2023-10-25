"use strict";

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const percentPerMonth = percent / 100 / 12;
  const loanAmount = amount - contribution;

  const monthlyPayment =
    loanAmount *
    (percentPerMonth +
      percentPerMonth / (Math.pow(1 + percentPerMonth, countMonths) - 1));

  const totalPayment = monthlyPayment * countMonths;

  return Math.round(totalPayment * 100) / 100;
}