import { spiral } from "./task4";

describe("function spiral", () => {
  it("spiral is instance of Function", () => {
    expect(spiral).toBeInstanceOf(Function);
  });

  it("spiral result is []", () => {
    const matrix = [[]];

    expect(spiral(matrix)).toEqual([]);
  });

  it("spiral result is [0, 1, 2, 3, 4]", () => {
    const matrix = [[0, 1, 2, 3, 4]];

    expect(spiral(matrix)).toEqual([0, 1, 2, 3, 4]);
  });

  it("spiral result is [0, 1, 2, 3, 4, 9, 14, 19, 18, 17, 16, 15, 10, 5, 6, 7, 8, 13, 12, 11]", () => {
    const matrix = [
      [0, 1, 2, 3, 4],
      [5, 6, 7, 8, 9],
      [10, 11, 12, 13, 14],
      [15, 16, 17, 18, 19],
    ];

    expect(spiral(matrix)).toEqual([
      0, 1, 2, 3, 4, 9, 14, 19, 18, 17, 16, 15, 10, 5, 6, 7, 8, 13, 12, 11,
    ]);
  });
});
