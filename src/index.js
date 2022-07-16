import { Parallel } from "./js/task3";
import { spiral } from "./js/task4";

// (async function main() {
//     const runner = new Parallel(2);
//     console.log(await runner
//         .jobs(
//             () => new Promise((resolve) => setTimeout(resolve, 10, 1)),
//             () => new Promise((resolve) => setTimeout(resolve, 50, 2)),
//             () => new Promise((resolve) => setTimeout(resolve, 20, 3)),
//             () => new Promise((resolve) => setTimeout(resolve, 90, 4)),
//             () => new Promise((resolve) => setTimeout(resolve, 30, 5)),
//         )) // [1, 3, 2, 4, 5];
//   })();

const matrix = [
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19],
];

console.log(spiral(matrix));
