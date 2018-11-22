
// 3. 使用函数默认参数和解构
// 你也许很熟悉以下的代码，在 JavaScript 中我们经常需要检查 null / undefined 并赋予默认值：
const test31 = (fruit, q) => {
  if (!fruit) return;
  const qs = q || 1; // 如果没有提供 quantity，默认为 1

  console.log(`我有${qs} 个 ${fruit}!`);
};

// 事实上，我们可以通过函数的默认参数来去掉变量 q。
// 请注意，所有的函数参数都可以有其默认值。举例来说，我们同样可以为 fruit 赋予一个默认值：function test(fruit = 'unknown', quantity = 1)
const test32 = (fruit, q = 1) => { // 如果没有提供 q，默认为 1
  if (!fruit) return;
  console.log(`我有${q} 个 ${fruit}!`);
};

// 测试结果
test31('香蕉'); // 我有1个香蕉!
test31('苹果', 2); // 我有2个苹果!
// 测试结果
test32('香蕉'); // 我有1个香蕉!
test32('苹果', 2); // 我有2个苹果!

// 222222 object
// 那么如果 fruit 是一个对象（Object）呢？我们还可以使用默认参数吗？
const test33 = (fruit) => {
  // 如果有值，则打印出来
  if (fruit && fruit.name) {
    console.log(fruit.name);
  } else {
    console.log('不知道');
  }
};
// 当水果名称属性存在时，我们希望将其打印出来，否则打印『unknown』。我们可以通过默认参数和解构赋值的方法来避免写出 fruit && fruit.name 这种条件
// 解构 —— 只得到 name 属性
// 默认参数为空对象 {}
const test34 = ({ name } = {}) => {
  console.log(name || 'unknown');
};
// 既然我们只需要 fruit 的 name 属性，我们可以使用 {name} 来将其解构出来，之后我们就可以在代码中使用 name 变量来取代 fruit.name
// 我们还使用 {} 作为其默认值。如果我们不这么做的话，在执行 test(undefined) 时，你会得到一个错误 Cannot destructure property name of 'undefined' or 'null'.，因为 undefined 上并没有 name 属性。（译者注：这里不太准确，其实因为解构只适用于对象（Object），而不是因为undefined 上并没有 name 属性（空对象上也没有）

// 测试结果
test33(undefined); // 不知道
test33({ }); // 不知道
test33({ name: '苹果', color: 'red' }); // 苹果
// 测试结果
test34(undefined); // unknown
test34({ }); // unknown
test34({ name: 'apple', color: 'red' }); // apple

