"use strict";

function solveEquation(a, b, c) {
  const discriminant = b ** 2 - 4 * a * c;
  const result = [];

  if (discriminant === 0) {
    const root = -b / (2 * a);
    result.push(root);
  } else if (discriminant > 0) {
    const sqrtDiscriminant = Math.sqrt(discriminant);
    const root1 = (-b + sqrtDiscriminant) / (2 * a);
    const root2 = (-b - sqrtDiscriminant) / (2 * a);

    result.push(root1, root2);
  }

  return result;
}