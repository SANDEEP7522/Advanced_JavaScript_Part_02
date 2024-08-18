
function person(name, age, gf) {
    this.name = name;
    this.age = age;
    this.gf = gf;
 
    this.sayHello = function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old and GF requarment ${this.gf} 😎....`);
    };
}
const person1 = new person('Sandeep', 20);
const person2 = new person('Anupam', 20);
const person3 = new person('Deepu', 21);
const person4 = new person('Anurag', 21);


person1.sayHello();
person2.sayHello();
person3.sayHello();
person4.sayHello();
  
// OUTPuT

// ello, my name is Sandeep and I am 20 years old and GF requarment undefined 😎....
// Hello, my name is Anupam and I am 20 years old and GF requarment undefined 😎....
// Hello, my name is Deepu and I am 21 years old and GF requarment undefined 😎....
// Hello, my name is Anurag and I am 21 years old and GF requarment undefined 😎....
