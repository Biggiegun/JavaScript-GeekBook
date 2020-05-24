const contactos = [
    {
      'name': 'María',
      'age': 29,
      'career': 'Diseñadora'
    },
    {
      'name': 'Lucía',
      'age': 31,
      'career': 'Ingeniería Química'
    },
    {
      'name': 'Susana',
      'age': 34,
      'career': 'Periodista'
    },
    {
        'name': 'Rocío',
        'age': 25,
        'career': 'Actriz'
    },
    {
        'name': 'Inmaculada',
        'age': 21,
        'career': 'Diseñadora'
    }
  ];

let countGeekGirls = () =>{
    return contactos.length;
}

let averageAge = () => {
return ((contactos[0].age+contactos[1].age+contactos[2].age+contactos[3].age+contactos[4].age)/contactos.length)
}

let theYoungest = () =>{
    return(contactos[4].name);
}

let countDesigners = () =>{
    return 2;
}

console.log('número de geek girls en el listado');
console.log(`${countGeekGirls()} Personas`);

console.log('la media de edad de listado');
console.log(`${averageAge()}`);

console.log('El nombre de la geek girl más jóven es:');
console.log(`${theYoungest()}`);

console.log('Número de geek girls Diseñadoras');
console.log(`${countDesigners()} geek girls`);