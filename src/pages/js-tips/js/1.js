// 1. 使用 Array.includes 来处理多重条件 includes() 方法用来判断一个数组是否包含一个指定的值，如果是返回 true，否则false。

// 条件语句
const test11 = (fruit) => {
  if (fruit === '苹果' || fruit === '草莓' || fruit === '樱桃' || fruit === '红梅') {
    console.info('red');
  }
};

const test12 = (fruit) => {
  // 把条件提取到数组中
  const redFruits = ['苹果', '草莓', '樱桃', '红梅'];

  if (redFruits.includes(fruit)) {
    console.info('red');
  }
};

test11('草莓');
test12('红梅');
