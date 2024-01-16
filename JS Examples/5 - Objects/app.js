const personArray = [
    "Ion Creanga",
    "Iasi, Romania",
    "+40123456789",
    "01.03.1837"
];

console.log(personArray);
console.log(personArray[0]);


const person = {
    name: "Ion Creanga",
    address: "Iasi, Romania",
    phone: "+40123456789",
    birthDate: "01.03.1837"
};

console.log(person);

console.log(person.name);


const products = [
    {
        name: "Laptop",
        price: 1000
    },
    {
        name: "Phone",
        price: 500
    },
    {
        name: "Tablet",
        price: 300
    }
];


for (const product of products) {
    console.log(product.name);
    console.log(product.price);   
}