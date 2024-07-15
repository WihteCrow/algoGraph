# 函数科里化 curry

在计算机科学中，柯里化（Currying）是把接受多个参数的函数变换成接受一个单一参数(最初函数的第一个参数)的函数，并且返回接受余下的参数且返回结果的新函数的技术。这个技术以逻辑学家 Haskell Curry 命名的。

科里化突出重要思想：降低适用范围，提高适用性
三个作用和特点：参数复用、提前返回、延迟执行

科里化函数依赖于闭包的概念。通过闭包，科里化函数能够记住和访问其创建时的环境和参数，从而实现部分应用和延迟计算。

## 一些使用场景：

正则表达式

```javascript
const _check = curry(checkByRegExp);
const checkCellPhone = _check(/^1\d{10}$/);
const checkEmail = _check(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/);
checkCellPhone('')
checkEmail('')
```

获取对象属性值
```javascript
const prop = curry(function(key,obj) {
    return obj[key];
})
const names = list.map(prop('name'))
```

bind函数


