// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(name = 'Ralph') {
    cats.push(name);
    return cats;
}

function destructivelyPrependCat(name){
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat(){
    cats.pop();
    return cats;
}

function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
}

function appendCat(name = "Broom") {
    const cats1 = [...cats, name];
    return cats1;
}

function prependCat(name= 'Arnold') {
    const cats2 = [name, ...cats];
    return cats2;
}

function removeLastCat() {
    const cats3 = cats.slice(0,cats.length -1);
    return cats3;
}

function removeFirstCat() {
    const cats4 = cats.slice(1);
    return cats4;
}