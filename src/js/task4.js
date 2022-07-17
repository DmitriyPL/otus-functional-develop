export function spiral(matrix) {
  let flatten = [];
  addChunk(flatten, matrix, "lr", 0);
  return flatten;
}

function addChunk(flatten, matrix, direction, iter) {
  let m = matrix[0].length - 1;
  let n = matrix.length - 1;

  let nextdirection;

  switch (direction) {
    case "lr":
      for (let i = iter; i <= m - iter; i++) {
        flatten.push(matrix[iter][i]);
      }
      nextdirection = "ud";
      break;

    case "ud":
      for (let i = iter + 1; i <= n - iter; i++) {
        flatten.push(matrix[i][m - iter]);
      }
      nextdirection = "rl";
      break;

    case "rl":
      for (let i = m - 1 - iter; i >= iter; i--) {
        flatten.push(matrix[n - iter][i]);
      }
      nextdirection = "du";
      break;

    case "du":
      for (let i = n - 1 - iter; i >= 1 + iter; i--) {
        flatten.push(matrix[i][iter]);
      }
      nextdirection = "lr";
      break;
  }

  if (flatten.length === (m + 1) * (n + 1)) {
    return flatten;
  } else {
    if (nextdirection === "lr") {
      iter++;
    }
    addChunk(flatten, matrix, nextdirection, iter);
  }
}
