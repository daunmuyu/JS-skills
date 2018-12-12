
// 2. 少写嵌套，尽早返回
const test21 = (fruit, q) => {
  const redFruits = ['苹果', '草莓', '樱桃', '红梅'];

  // 条件 1：fruit 必须有值
  if (fruit) {
    // 条件 2：必须为红色
    if (redFruits.includes(fruit)) {
      console.log('red');

      // 条件 3：必须是大量存在
      if (q > 10) {
        console.log('最大数量');
      }
    }
  } else {
    throw new Error('不是水果!');
  }
};

// 总结 => 让我们来仔细看看上面的代码，我们有： 1 个 if/else 语句来筛选无效的条件 3 层 if 语句嵌套（条件 1，2 & 3）

// 遵循的一个总的规则是当发现无效条件时尽早返回。
// /_ 当发现无效条件时尽早返回 _/

const test22 = (fruit, q) => {
  const redFruits = ['苹果', '草莓', '樱桃', '红梅'];

  // 条件 1：尽早抛出错误
  if (!fruit) throw new Error('不是水果!');

  // 条件2：必须为红色
  if (redFruits.includes(fruit)) {
    console.log('red');

    // 条件 3：必须是大量存在
    if (q > 10) {
      console.log('最大数量');
    }
  }
};
// 总结： 如此一来，我们就少写了一层嵌套。这是种很好的代码风格，尤其是在 if 语句很长的时候（试想一下，你得滚动到底部才能知道那儿还有个 else 语句，是不是有点不爽）。

// 如果反转一下条件，我们还可以进一步地减少嵌套层级。注意观察下面的条件 2 语句，看看是如何做到这点的
// /_ 当发现无效条件时尽早返回 _/
const test23 = (fruit, q) => {
  const redFruits = ['苹果', '草莓', '樱桃', '红梅'];

  if (!fruit) throw new Error('不是水果!'); // 条件 1：尽早抛出错误
  if (!redFruits.includes(fruit)) return; // 条件 2：当 fruit 不是红色的时候，直接返回

  console.log('red');

  // 条件 3：必须是大量存在
  if (q > 10) console.log('最大数量');
};
// 总结：通过反转条件 2 的条件，现在我们的代码已经没有嵌套了。当我们代码的逻辑链很长，并且希望当某个条件不满足时不再执行之后流程时，这个技巧会很好用。

// 测试结果
test21(null); // 报错：不是水果s
test21('苹果'); // 打印：red
test21('苹果', 20); // 打印：red，最大数量
// 测试结果
test22(null); // 报错：不是水果s
test22('苹果'); // 打印：red
test22('苹果', 20); // 打印：red，最大数量// 测试结果
// 测试结果
test23(null); // 报错：不是水果s
test23('苹果'); // 打印：red
test23('苹果', 20); // 打印：red，最大数量
