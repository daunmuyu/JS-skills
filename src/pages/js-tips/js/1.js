// 1. 使用 Array.includes 来处理多重条件 includes() 方法用来判断一个数组是否包含一个指定的值，如果是返回 true，否则false。

// 条件语句
const test11 = (ft) => {
  if (ft === '苹果' || ft === '草莓' || ft === '樱桃' || ft === '红梅') {
    console.info('red');
  }
};

const test12 = (ft) => {
  // 把条件提取到数组中 Array.includes()函数判断是否包含某一元素 它直接返回true或者false表示是否包含元素，对NaN一样能有有效
  const redFts = ['苹果', '草莓', '樱桃', '红梅'];

  if (redFts.includes(ft)) {
    console.info('red');
  }
};

test11('草莓');
test12('红梅');
