function Phone(brand, price, color) {
    this.brand = brand;
    this.price = price;
    this.color = color;
}

Phone.prototype.printInfo = function() {
    console.log('The phone brand is: ' + this.brand + ', color is: ' + this.color + ' and the price is: ' + this.price + '.');
};

var iPhone6S = new Phone('Apple', 2250, 'silver');
var samsungGalaxyS6 = new Phone('Samsung', 3001, 'black');
var nokiaN3210 = new Phone('Nokia', 4200, 'gold');

iPhone6S.printInfo();