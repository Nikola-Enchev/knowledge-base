class Point {
  coordX;// x
  coordY; //y

  constructor(coordX, coordY) {
      this.coordX = coordX;
      this.coordY = coordY;
  }
}

class Rectangle {

  startingPoint;
  rectWidth; // width
  rectHeight; // height

  constructor(startingPoint, rectWidth, rectHeight) {
      this.startingPoint = startingPoint;
      this.rectWidth = rectWidth;
      this.rectHeight = rectHeight;
  }

  area() { // getArea
      return this.rectWidth * this.rectHeight;
  }

  endPoints() { //logEndpoints
      const topRight = this.origin.coordX + this.rectWidth;
      const bottomLeft = this.origin.coordY + this.rectHeight;

      console.log(`Starting Point X: ${this.origin.coordX}`);
      console.log(`Starting Point Y: ${this.origin.coordY}`);
      console.log(`End Point X-Axis: ${topRight}`);
      console.log(`End Point Y-Axis: ${bottomLeft}`);
  }
}

const buildRect = () => { //buildRectangle
  const mainPoint = Point(50, 100); // origin
  const rect = Rectangle(mainPoint, 90, 10); // rectangle

  return rect; //rect
};

const rect= buildRect(); //

print(rect.area());
rect.endPoints();