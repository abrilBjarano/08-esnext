const heroes = [
   'Batman',
   'Superman',
   'Flash',
   'Aquaman',
]

// heroes.sort();
// heroes.reverse();

// const heroesCopy = heroes;
// const sortedHeroes = heroes.toSorted();
// const reversedHeroes = heroes.toReversed();
// const deletedHero = heroes.toSpliced(0, 2, 'Green Lantern');
const deletedHeroes = heroes.toSpliced(0,2, 'Green');


console.table(heroes);
console.table(deletedHeroes);
// console.table(reversedHeroes);