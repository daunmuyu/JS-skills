// 5.使用 Array.every 和 Array.some 来处理全部/部分满足条件

// JavaScript 数组函数来减少代码行数
const fruits = [
  { name: 'apple', color: 'red' },
  { name: 'banana', color: 'yellow' },
  { name: 'grape', color: 'purple' }
];

const test51 = () => {
  let isAllRed = true;
  // 条件：所有的水果都必须是红色
  for (const f of fruits) {
    if (!isAllRed) break;
    isAllRed = (f.color === 'red');
  }

  console.log(isAllRed); // false
};

// 通过 Array.every 来缩减代码
// every():方法用于检测数组中所有元素是否【都符合指定】条件，若符合返回true，否则返回false；
const test52 = () => {
  // 条件：（简短形式）所有的水果都必须是红色
  const isAllRed = fruits.every(f => f.color === 'red');

  console.log(isAllRed); // false
};

// Array.some 仅用一行代码就实现出来
// some():方法用于检测数组中的元素是否【有满足指定】条件的，若满足返回true，否则返回false；
const test53 = () => {
  // 条件：至少一个水果是红色的
  const isAnyRed = fruits.some(f => f.color === 'red');

  console.log(isAnyRed); // true
};

// every()方法使用指定函数检测数组中的所有元素；
// 如果数组中检测到有一个元素不满足，则整个表达式返回false，且剩余的元素不会再进行检测。如果所有元素都满足条件，则返回true；
// some()方法会依次执行数组的每个元素；
// 如果有一个元素满足条件，则表达式返回true，剩余的元素不会再执行检测。如果没有满足条件的元素，则返回false
// 注意：every()与some()不会对空数组进行检测；every()与some()不会改变原始数组；

// 测试结果
test51();
// 测试结果
test52();
// 测试结果
test53();

// every()是对数组中的每一项运行给定函数，如果该函数对每一项都返回true，则返回true。
// some()是对数组中的每一项运行给定函数，如果该函数对任一项返回true，则返回true。
// every()和some()很相似，他们都用于查询数组中的项是否满足某个条件，对every()来说，传入的函数必须对每一项都返回true，这个方法才返回true；否则，则返回false。而some()方法则只要传入的函数对数组中的某一项返回true，就会返回true

