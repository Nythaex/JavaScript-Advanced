function createCar(object) {
    let car = {};
    let engine = {};
    let carriage = {};

    car.model = object.model;
    if (object.power <= 90) {
        engine.power = 90;
        engine.volume = 1800;
    } else if (object.power <= 120) {
        engine.power = 120;
        engine.volume = 2400;
    } else if (object.power <= 200) {
        engine.power = 200;
        engine.volume = 3500;
    }
    carriage.type = object.carriage;
    carriage.color = object.color;
    let size = object.wheelsize;
    if (object.wheelsize % 2 === 0) {
        size--;
    }
    car.wheels = [size, size, size, size]
    car.engine = engine;
    car.carriage = carriage;
    return car
}


console.log(createCar({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
));