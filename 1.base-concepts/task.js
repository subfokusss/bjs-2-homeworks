"use strict";

function solveEquation(a, b, c) {
  var discriminant = b ** 2 - 4 * a * c;
  var result = [];

  if (discriminant < 0) {
    return result;
  } else if (discriminant === 0) {
    var root = -b / (2 * a);
    result.push(root);
  } else {
    var sqrtDiscriminant = Math.sqrt(discriminant);
    var root1 = (-b + sqrtDiscriminant) / (2 * a);
    var root2 = (-b - sqrtDiscriminant) / (2 * a);

    result.push(root1, root2);
  }

  return result;
}