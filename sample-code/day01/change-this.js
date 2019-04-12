var rectangle = {
  w: 50,
  h: 40,
  area() {
    return this.w * this.h;
  },
  circum() {
		return (this.w + this.h) * 2;
	},
	checkInRank(value, min, max) {
		return value < max && value > min;
	}
};

// get rectangle area:
console.log(rectangle.area()); //-> 2000
console.log(rectangle.circum()); //-> 180

var square = {
  w: 50,
	h: 50,
};
// instead of
square.area = rectangle.area;
square.area(); //-> 2500

// we can do this
rectangle.area.call(square); //-> 2500
rectangle.area.apply(square); //-> 2500

rectangle.checkInRank.call(square, 2, 1, 3); //-> 2500
rectangle.checkInRank.apply(square, [2, 1, 3]); //-> 2500