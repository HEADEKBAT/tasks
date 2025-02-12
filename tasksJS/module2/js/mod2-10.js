var radius = 30;
var shape = {
    radius: 10,
    diameter() {
        return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter());
console.log(shape.perimeter());
console.log(Math.PI);

// 20 есть свой this, поэтому 10*2
// 30 * 2 * PI = примено 188 так как не имеет своего this radius = 30