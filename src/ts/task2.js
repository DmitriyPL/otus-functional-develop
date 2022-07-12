export function sum(...params) {
  let s = 0;
  if (params.length) {
    s = params.reduce((a, b) => a + b);
  }

  function innerSum(...innerParams) {
    return sum(...innerParams.concat(s));
  }

  innerSum.toString = innerSum.valueOf = function () {
    return s;
  };

  return innerSum;
}
