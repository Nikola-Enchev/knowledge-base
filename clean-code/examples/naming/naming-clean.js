class Point {
    x;
    y;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Rectangle {

    origin;
    width;
    height;

    constructor(origin, width, height) {
        this.origin = origin;
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }

    printCoordinates() {
        const topRight = this.origin.x + this.width;
        const bottomLeft = this.origin.y + this.height;

        console.log(`Starting Point X: ${this.origin.x}`);
        console.log(`Starting Point Y: ${this.origin.y}`);
        console.log(`End Point X-Axis: ${topRight}`);
        console.log(`End Point Y-Axis: ${bottomLeft}`);
    }
}

const buildRectangle = () => {
    const rectangleOrigin = Point(50, 100);
    const rectangle = Rectangle(rectangleOrigin, 90, 10);

    return rectangle;
};

const rectangle = buildRectangle();

print(rectangle.getArea());
rectangle.printCoordinates();