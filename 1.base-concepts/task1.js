"use strict";

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (
    typeof percent !== "number" ||
    typeof contribution !== "number" ||
    typeof amount !== "number" ||
    typeof countMonths !== "number"
  ) {
    return "Ошибка ввода. Все аргументы должны быть числами.";
  }

  if (percent < 0 || contribution < 0 || amount < 0 || countMonths < 0) {
    return "Ошибка ввода. Все аргументы должны быть положительными числами.";
  }

  const percentPerMonth = percent / 100 / 12;
  const loanAmount = amount - contribution;

  const monthlyPayment =
    loanAmount *
    (percentPerMonth +
      percentPerMonth / (Math.pow(1 + percentPerMonth, countMonths) - 1));

  const totalPayment = monthlyPayment * countMonths;

  return Math.round(totalPayment * 100) / 100;
}