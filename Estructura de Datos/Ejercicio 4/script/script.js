const users = [
    {name: 'Nymphadora Tonks', time: 9},
    {name1: 'Cedric Diggory', time1: 28},
    {name2: 'Cho Chang', time2: 35},
    {name3: 'Luna Lovegood', time3: 45},
    {name4: 'Gregory Goyle', time4: 56}
  ];



console.log('El ganador es:');

const [l]= users;
const {name} = users[0];
console.log(`${name}`);

console.log('Y su tiempo es:');

const [o]= users;
const {time} = users[0];
console.log(`${time}`);

///////////////////////////////////////////////////////////////

const winner = {name: 'Nymphadora Tonks', time: 9}
const win = {...winner, win: 1}

console.log(win);
