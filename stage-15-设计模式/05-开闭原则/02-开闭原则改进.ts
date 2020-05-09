//基类
abstract class Shape {
    m_type : number;
    abstract draw() : void;
}

//方形
class Rectangle extends Shape {
    constructor() {
        super();
        this.m_type = 1;
    }

    draw(): void {
        console.log('绘制矩形');
    }
}

//圆形
class Circle extends Shape {
    constructor() {
        super();
        this.m_type = 2;
    }
    draw(): void {
        console.log('绘制圆形');
    }
}

//三角形
class Triangle extends Shape {
    constructor() {
        super();
        this.m_type = 3;
    }
    draw(): void {
        console.log('绘制三角形');
    }
}

//此时新增一个画其他图形的方法,就很方便了
class otherGraphic extends Shape {
    constructor() {
        super();
        this.m_type = 3;
    }
    draw(): void {
        console.log('绘制其他图形');
    }
}


// 这是一个用于绘图的类[使用方]
class GraphicEditor {
    drawShape(s : Shape) {
        s.draw();
    }
}

let graphicEditor = new GraphicEditor();
graphicEditor.drawShape(new Rectangle());
graphicEditor.drawShape(new Circle());
graphicEditor.drawShape(new Triangle());
graphicEditor.drawShape(new otherGraphic());

export {}