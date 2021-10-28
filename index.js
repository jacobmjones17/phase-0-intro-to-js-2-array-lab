const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name) {
    cats.push(name)
};

function destructivelyPrependCat(name) {
    cats.unshift(name)
};

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(name) {
    const copyOfCats = [...cats, name];
    return copyOfCats
}

function prependCat(name) {
    const prependCats = [name, ...cats];
    return prependCats
}

function removeLastCat() {
    const removeUltimaGata = [...cats];
    return removeUltimaGata.slice(0,2)
}

function removeFirstCat() {
    const removePrimeiraGata = [...cats];
    return removePrimeiraGata.slice(1)
}