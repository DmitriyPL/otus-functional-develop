type Params<F extends (...args: any[]) => any> = 
F extends (...args: infer A) => any
? A
: never

type Head<T extends any[]> = 
T extends [any, ...any[]]
? T[0]
: never

type Tail<T extends any[]> =
((...t: T)=> any) extends ((_: any, ...tail: infer TT) => any)
? TT
: []

type HasTail<T extends any[]> =
T extends ([] | [any])
? false
: true

type MyCurry<P extends any[], R> =
(arg0: Head<P>) => HasTail<P> extends true
? MyCurry<Tail<P>, R>
: R

declare function CyrryV0<P extends any[], R> (
  f: (...args: P) => R
): MyCurry<P, R>

  // interface myCurry<number, number, number, number, number>

type test08 = Parameters<typeof func>;
type test09 = Head<[1, 2 , string, number]>;
type test10 = Head<Params<typeof func>>;

type test11 = Tail<[1, 2 , string, number]>;
type test12 = Tail<Params<typeof func>>;
type test13 = Tail<test12>;

type params = [1, 2, string];
type test14 = HasTail<params>
type test15 = HasTail<Tail<params>>
type test16 = HasTail<Tail<Tail<params>>>

const func = (a: number, b: number, c: number, d: number, e: number) => a + b + c + d + e;
const hof = CyrryV0(func);

  // console.log(hof(1, 2, 3, 4, 5)); // 15
  // console.log(hof(2, 3, 4)(5, 6)); // 20
  // // console.log(hof(3, 4)(5, 6)(7)); // 25
  // // console.log(hof(4, 5)(6)(7, 8)); // 30
console.log(hof(5)(6)(7)(8)(9)); // 35
