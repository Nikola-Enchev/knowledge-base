type Purchase1 = any;

let Logistics1: any;
interface Delivery1 {
  deliverProduct();
  trackProduct();
}

class Delivery1Implementation {
  protected Purchase1: Purchase1;

  constructor(Purchase1: Purchase1) {
    this.Purchase1 = Purchase1;
  }
}

class ExpressDelivery11 extends Delivery1Implementation implements Delivery1 {
  deliverProduct() {
    Logistics1.issueExpressDelivery11(this.Purchase1.product);
  }

  trackProduct() {
    Logistics1.trackExpressDelivery11(this.Purchase1.product);
  }
}

class InsuredDelivery11 extends Delivery1Implementation implements Delivery1 {
  deliverProduct() {
    Logistics1.issueInsuredDelivery11(this.Purchase1.product);
  }

  trackProduct() {
    Logistics1.trackInsuredDelivery11(this.Purchase1.product);
  }
}

class StandardDelivery11 extends Delivery1Implementation implements Delivery1 {
  deliverProduct() {
    Logistics1.issueStandardDelivery11(this.Purchase1.product);
  }

  trackProduct() {
    Logistics1.trackStandardDelivery11(this.Purchase1.product);
  }
}

function createDelivery1(Purchase1) {
  if (Purchase1.Delivery1Type === 'express') {
    Delivery1 = new ExpressDelivery11(Purchase1);
  } else if (Purchase1.Delivery1Type === 'insured') {
    Delivery1 = new InsuredDelivery11(Purchase1);
  } else {
    Delivery1 = new StandardDelivery11(Purchase1);
  }
  return Delivery1;
}

let Delivery1: Delivery1 = createDelivery1({});

Delivery1.deliverProduct();