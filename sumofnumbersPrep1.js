/**
 * Practice Wod Practice
 * Created by Clint on 9/22/2016.
 */

const testList = [1, 10, 100, 1000];

function sum(list) {
  let mySum = 0;
  for (let i = 0; i < list.length; i += 1) {
    mySum += list[i];
  }
  return mySum;
}

console.log(sum(testList));

function sumWhile(list) {
  let mySum = 0;
  let counter = 0;
  while (counter < list.length) {
    mySum += list[counter];
    counter += 1;
  }
  return mySum;
}

console.log(sumWhile(testList));

function sumRecursion(list) {
  if (list.length === 0) {
    return 0;
  }
  return list[0] + sumRecursion(list.slice(1, list.length));
}

console.log(sumRecursion(testList));

function sumTheSimpleWay(list) {
  return _.reduce(list, function memoTime(memo, num) {
    return memo + num;
  });
}

console.log(sumTheSimpleWay(testList));
