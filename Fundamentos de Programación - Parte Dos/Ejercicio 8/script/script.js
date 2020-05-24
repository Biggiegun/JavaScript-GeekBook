const firstDogImage = 'https://images.dog.ceo/breeds/chihuahua/n02085620_1205.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://images.dog.ceo/breeds/malamute/n02110063_642.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://images.dog.ceo/breeds/chihuahua/n02085620_3409.jpg';
const thirdDogName = 'Lana';


one = document.querySelector('.one');
one.innerHTML = `<img src="https://images.dog.ceo/breeds/chihuahua/n02085620_1205.jpg" alt="dog_one"/> <br> ${firstDogName}`;



two = document.querySelector('.two');
two.innerHTML = `<img src="https://images.dog.ceo/breeds/malamute/n02110063_642.jpg" alt="dog_two"/> <br> ${secondDogName}`;



three = document.querySelector('.three');
three.innerHTML = `<img src="https://images.dog.ceo/breeds/chihuahua/n02085620_3409.jpg" alt="dog_three"/> <br> ${thirdDogName}`;
