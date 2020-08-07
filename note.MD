# commonjs的导入规则

## exports对象

在commonjs的导入规则中，module.exports是个正常的js的对象。

它可以被添加不同的key值，也是此文件想被导出的东西，比如函数啊，对象啊，变量啊。

同时它的导出的这个对象就是module.exports对象的引用，意味这导出的对象的修改会导致原文件module.exports对象的修改

如果没有module.exports的话，exports也可以被导出。