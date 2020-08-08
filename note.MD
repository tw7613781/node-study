# 1. commonjs的导入规则

## 1.1 exports对象

在commonjs的导入规则中，module.exports是个正常的js的对象。

它可以被添加不同的key值，也是此文件想被导出的东西，比如函数啊，对象啊，变量啊。

同时它的导出的这个对象就是module.exports对象的引用，意味这导出的对象的修改会导致原文件module.exports对象的修改

如果没有module.exports的话，exports也可以被导出。

# 2. nodejs内置模块

![node v8 architecture](./assets/node_v8.png)

## 2.1 应用程序主动去获取的内置模块或方法

大多数nodejs的内置模块是通过v8的nodejs bindings，到libuv获得的。比如os模块的`os.cpus()`方法等。

## 2.2 os系统主动来通知的内置模块或方法

在nodejs中有个Events模块，里面有个EventEmitter类。继承了这个类的子类的实例可以抛出事件，并且带出数据。

然后我们在应用程序层面可以通过导出这个实例，并且使用它的`addListener()`或者简单的`on()`可以监听这些事件，获得数据。

这种叫做观察者模式，它理想的场景具有两个特点

- 不需要知道被通知者的存在

- 没有人听还能继续下去


