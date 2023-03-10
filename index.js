// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name = 'Ralph') {
    cats.push(name);
    return cats;
}

function destructivelyPrependCat(name = 'Bob') {
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name);
    return cats;
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
    return cats;
}

function appendCat(name = 'Broom') {
    const cats_1 = [...cats, name];
    return cats_1;
}

function prependCat(name = 'Arnold') {
    const cats_2 = [name,...cats];
    return cats_2;
}

function removeLastCat(name) {
    const cats_3 = cats.slice(0, cats.length -1);
    return cats_3;
}

function removeFirstCat(name) {
    const cats_4 = cats.slice(1);
    return cats_4; 
}