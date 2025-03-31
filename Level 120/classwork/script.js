let car = {
    brand: 'Mercedes',
    model: 'BANAN',
    color: "Black"
};

for (let property in car) {
    console.log(property + ": " + car[property]);
}

console.log("This is a " + car.brand + " brand, specifically the " + car.model + " car model")