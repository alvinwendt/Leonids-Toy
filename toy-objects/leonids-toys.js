//Data Structure

const iPhone = {
  id: 1,
  name: "iPhone",
  maker: "Apple",
  operatingSystem: "iOS",
  price: 900,
  weight: 1.2,
  color: "Space Grey",
};

const galaxy = {
  id: 2,
  name: "Galaxy",
  maker: "Samsung",
  operatingSystem: "Android",
  price: 600,
  weight: 1.4,
  color: "Matte Black",
};

const surface = {
  id: 3,
  name: "Surface",
  maker: "Microsoft",
  operatingSystem: "Android",
  price: 1400,
  weight: 1.8,
  color: "Black",
};

//Array of Objects
const toys = [iPhone, galaxy, surface];

console.log(toys);

//Displaying Toy Properties
for (const toy of toys) {
  console.log(toy.maker);
}

//Adding Toys
const google = {
  id: 4,
  name: "Pixel",
  maker: "Google",
  operatingSystem: "Android",
  price: 400,
  weight: 1.5,
  color: "White",
};

const oneplus = {
  id: 5,
  name: "10-Pro",
  maker: "OnePlus",
  operatingSystem: "Android",
  price: 700,
  weight: 1.1,
  color: "Silver",
};

toys.push(google, oneplus);

console.log(toys);

//Iteration & String Interpolation
for (const toy of toys) {
  console.log(`The ${toy.color} ${toy.name} costs ${toy.price} dollars.`);
}

//Logic In Loops
for (const toy of toys) {
  toy.price = toy.price * 1.05;
  console.log(`The ${toy.color} ${toy.name} costs ${toy.price} dollars.`);
}
