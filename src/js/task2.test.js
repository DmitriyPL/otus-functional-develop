import { sum } from "./task2";

jest.spyOn(window, "alert").mockImplementation((fn) => {
  return fn.toString();
});

describe("function sum", () => {
  it("s to be instance of Function", () => {
    const s = sum();
    expect(s).toBeInstanceOf(Function);
  });

  it("empty calling return 0", () => {
    expect(alert(sum())).toBe(0);
  });

  it("sum has curry options", () => {
    const s = sum();
    expect(alert(s(1))).toBe(1);
    expect(alert(s(1)(2))).toBe(3);
    expect(alert(s(3)(4)(5))).toBe(12);
    expect(alert(s(3, 1)(4, 1)(5, 1))).toBe(15);
    expect(alert(s(3, 1, 4, 1)(5, 1))).toBe(15);
  });

  it("fuction caches the initial state", () => {
    const s3 = sum(3);
    expect(alert(s3(5))).toBe(8);
    expect(alert(s3(6))).toBe(9);
  });
});
