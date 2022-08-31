class Circle {


    constructor(radius) {
        this.radius = radius;
    }

    set diameter(value) {
        this.radius = value / 2;
    }

    get diameter() {
        return 2 * this.radius
    }
    get area() {
        return Math.PI * Math.pow(this.radius, 2)
    }

}