function greetGuest({ name = 'User', place }) {
  console.log(`Hello ${name}, welcome to ${place}`);
}

greetGuest({ place: 'Michigan' });