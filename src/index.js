import { sum } from "./ts/task2";

alert(sum());
const s = sum();
alert(s(1)); // 1
alert(s(1)(2)); //3
alert(s(3)(4)(5)); // 12
const s3 = sum(3);
alert(s3(5)); // 8
alert(s3(6)); // 9
