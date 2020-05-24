const users = [
    {name: 'Nymphadora Tonks', time: 9},
    {name1: 'Cedric Diggory', time1: 28},
    {name2: 'Cho Chang', time2: 35},
    {name3: 'Luna Lovegood', time3: 45},
    {name4: 'Gregory Goyle', time4: 56}
  ];



console.log('Los ganadores son:');

const [l]= users;
const {name} = users[0];
console.log(`${name}`);

const [,m]= users;
const {name1} = users[1];
console.log(`${name1}`);

const [,,n]= users;
const {name2} = users[2];
console.log(`${name2}`);

console.log('Y sus tiempos son:');

const [o]= users;
const {time} = users[0];
console.log(`${time}`);

const [,p]= users;
const {time1} = users[1];
console.log(`${time1}`);

const [,,q]= users;
const {time2} = users[2];
console.log(`${time2}`);