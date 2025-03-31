const person = {
    name: "გიორგი",
    age: 30,
    city: "თბილისი"
  };
  
  for (let key in person) {
    if (person.hasOwnProperty(key)) {
      console.log(`${key}: ${person[key]}`);
    }
  }
  
// task number 2

  const productPrices = {
  apple: 2.5,
  banana: 1.2,
  orange: 3.0,
  pear: 1.8
};

let totalPrice = 0;

for (let key in productPrices) {
  if (productPrices.hasOwnProperty(key)) {
    totalPrice += productPrices[key];
  }
}

console.log(`ჯამი: ${totalPrice}`);
