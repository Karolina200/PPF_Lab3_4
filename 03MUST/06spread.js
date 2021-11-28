const languages = ['javascript','c++','python','java'];
const dsl=['SQL','HTML','CSS','NoSQL'];


const allLanguages=[...languages,...dsl];

console.log(languages);
console.log(dsl);
console.log(allLanguages);

courseDataForYear ={
    name:'Projektowanie i programowanie front-end',
    shortcut:'PPFront',
    year:'2',
    yearstart:'2021',
    yearend:'2022',
    content:{
types:{
    lectures: true,
    laboratories: true,
    projects:true
},
hours:{
    lectures:15,
    laboratories: 15,
    projects :15
}
}
}