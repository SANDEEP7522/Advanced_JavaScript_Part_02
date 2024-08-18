
class Shape {
    draw() {
        console.log("Drawing a shape");
    }
}

class Circle extends Shape {
    draw() {
        console.log("Drawing a circle");
    }
}

class Rectangle extends Shape {
    draw() {
        console.log("Drawing a rectangle");
    }
}

const shapes = [
    new Circle(),
    new Rectangle(),
    new Shape() 
];

shapes.forEach(shape => {
    shape.draw();
});

