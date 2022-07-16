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

  // it("runner used two parallel workers", () => {
  //   return main().then( data => {
  //     expect(data.length).toBe(3);
  //   })
  // });

  // it("1st worker has two results", () => {
  //   return main(runner).then( data => {
  //     expect(data[0].length).toBe(2);
  //     expect(data[0]).toEqual([1, 2]);
  //   })
  // });

  // it("2st worker has two results", () => {
  //   expect(data[1].length).toBe(2);
  //   expect(data[1]).toEqual([3, 4]);
  // });

  // it("3rd worker has one result", () => {
  //   expect(data[2].length).toBe(1);
  //   expect(data[2]).toEqual([5]);
  // });
});
