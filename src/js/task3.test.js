import { Parallel } from "./task3";

async function main() {
  const runner = new Parallel(3);
  return runner.jobs(
    () => new Promise((resolve) => setTimeout(resolve, 10, 1)),
    () => new Promise((resolve) => setTimeout(resolve, 50, 2)),
    () => new Promise((resolve) => setTimeout(resolve, 20, 3)),
    () => new Promise((resolve) => setTimeout(resolve, 90, 4)),
    () => new Promise((resolve) => setTimeout(resolve, 30, 5))
  );
}

describe("class Parallel", () => {
  it("runner to be instance of Class", () => {
    const runner = new Parallel(3);
    expect(runner.jobs).toBeInstanceOf(Function);
  });

  it("runner result is Array", () => {
    return main().then((data) => {
      expect(data).toBeInstanceOf(Array);
    });
  });
});
