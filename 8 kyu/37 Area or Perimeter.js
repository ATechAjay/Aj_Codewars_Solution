// The perimeter formula for a rectangle states that P = (L + W) × 2,
// The area would be length times width, which is equal to side × side.

const areaOrPerimeter = function (l, w) {
  if (l === w) {
    console.log("The are of the square: ", l * w);
  } else {
    console.log("Perimeter of a reactangle :", (l + w) * 2);
  }
};
areaOrPerimeter(6, 10);
areaOrPerimeter(3, 3);
