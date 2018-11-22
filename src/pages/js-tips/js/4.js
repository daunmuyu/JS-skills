// 4. 相较于 switch，Map / Object 也许是更好的选择

// 我们想要根据颜色打印出各种水果：
const test41 = (color) => {
  // 使用 switch case 来找到对应颜色的水果
  switch (color) {
    case 'red':
      return ['苹果', '草莓'];
    case 'yellow':
      return ['香蕉', '菠萝'];
    case 'purple':
      return ['葡萄', '李子'];
    default:
      return [];
  }
};


// 使用对象字面量来找到对应颜色的水果
const fruitColor1 = {
  red: ['苹果', '草莓'],
  yellow: ['香蕉', '菠萝'],
  purple: ['葡萄', '李子']
};

const test42 = (color) => {
  return fruitColor1[color] || [];
};

// 使用 Map 来找到对应颜色的水果  Map 是 ES2015 引入的新的对象类型，允许你存放键值对。
const fruitColor2 = new Map()
  .set('red', ['苹果', '草莓'])
  .set('yellow', ['香蕉', '菠萝'])
  .set('purple', ['葡萄', '李子']);

const test43 = (color) => {
  return fruitColor2.get(color) || [];
};

// 重构语法
const fruits = [
  { name: '苹果', color: 'red' },
  { name: '草莓', color: 'red' },
  { name: '香蕉', color: 'yellow' },
  { name: '菠萝', color: 'yellow' },
  { name: '葡萄', color: 'purple' },
  { name: '李子', color: 'purple' }
];

function test44(color) {
  // 使用 Array filter 来找到对应颜色的水果
  return fruits.filter(f => f.color === color);
}

// 测试结果
test41(null); // []
test41('yellow'); // ['香蕉', '菠萝']
// 测试结果
test42(null); // []
test42('yellow'); // ['香蕉', '菠萝']
// 测试结果
test43(null); // []
test43('yellow'); // ['香蕉', '菠萝']
// 测试结果
test44(null); // []
test44('yellow'); // ['香蕉', '菠萝']

// map()是对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组。这个数组的每一项都是在原始数据中的对应项上运行传入函数的结果
// filter()是对数组中的每一项运行给定函数，返回该函数会返回true的项所组成的数组。它利用指定的函数确定是否在返回的数组中包含某一项
// forEach() 是多数组中的每一项运行给定函数，这个方法没有返回值。它只是对数组中的每一项运行传入的函数，没有返回值。本质上与使用for循环迭代数组一样。
