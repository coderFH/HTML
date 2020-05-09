//基类
class Shape {
    m_type : number;
}

//方形
class Rectangle extends Shape {
    constructor() {
        super();
        this.m_type = 1;
    }
}

//圆形
class Circle extends Shape {
    constructor() {
        super();
        this.m_type = 2;
    }
}

//此时,我新增一个三角形类型,对于代码的改动是很大的
class Triangle extends Shape {
    constructor() {
        super();
        this.m_type = 3;
    }
}


// 这是一个用于绘图的类[使用方]
class GraphicEditor {
    //接受Shape对象,然后根据type,来绘制不同的图形
    drawShape(s : Shape) {
        if (s.m_type === 1) {
            this.drawRectangle(s);
        } else if (s.m_type === 2) {
            this.drawCircle(s);
        } else {
            this.drawTriangle(s);
        }
    }

    // 绘制矩形
    private drawRectangle(r : Shape) {
        console.log('绘制矩形');
    }

    // 绘制圆形
    private drawCircle(r : Shape) {
        console.log('绘制圆形');
    }

    // 绘制圆形
    private drawTriangle(r : Shape) {
        console.log('绘制三角形');
    }
}

/*
1. 优点是比较好理解，简单易操作。
2. 缺点是违反了设计模式的ocp原则，即对扩展开放(提供方)，对修改关闭(使用方)。即当我们给类增加新功能的时候，
    尽量不修改代码，或者尽可能少修改代码.
3. 比如我们这时要新增加一个图形种类三角形，我们需要做如下修改，修改的地方较多
4. 改进思路:把创建 Shape 类做成抽象类，并提供一个抽象的 draw 方法，让子类去实现即可，这样我们有新的图形 种类时，
    只需要让新的图形类继承 Shape，并实现 draw 方法即可，使用方的代码就不需要修 -> 满足了开闭原则
*/
let graphicEditor = new GraphicEditor();
graphicEditor.drawShape(new Rectangle());
graphicEditor.drawShape(new Circle());
graphicEditor.drawShape(new Triangle());

export {}