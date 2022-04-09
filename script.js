// eslint-disable-next-line prefer-const
let name = `James`;

const person = { first: name };

// eslint-disable-next-line no-console
console.log(person);

const sayHelloLinting = fName => {
  // eslint-disable-next-line no-console
  console.log(`Hello ${fName}`);
};

sayHelloLinting('Dinh');
