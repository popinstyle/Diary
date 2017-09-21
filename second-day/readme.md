# Knowledge Point #

## 居中布局 ##

    .container {
        width: 500px;
        height: 400px;
        top: 50%;
        left: 50%;
        transfrom: translate(-50%, -50%)
    }

## 定位&文档流 ##

### position: relative 和 position: absolute ，relative不会脱离文档流，而absolute会脱离文档流 ###

### absolute根据向上级最近的relative的位置进行定位，若无，根据body的位置进行定位 ###

    .container {
        width: 100%;
        height: 500px;
        position: relative;
    }

    .child-container {
        position: absolute;
        left: 0;
        top: 0;
    }


## ES6 ##

-   class语法(类): class的实现是在prototype的基础上的一个语法糖

    function Person(name) {

        this.name = name || 'popinstyle';

    }

    Person.prototype.showName = function () {

        console.log(this.name);

        return this;

    }


    class Person {

        constructor (name) {

            this.name = name;

        }

        showName () {

            console.log(this.name)

        }

    }
    