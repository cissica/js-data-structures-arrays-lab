// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
    drivers.push(name)
}

function destructivelyPrependDriver(name) {
    drivers.unshift(name)
}

function destructivelyRemoveLastDriver() {
    drivers.pop()
} 

function destructivelyRemoveFirstDriver() {
    drivers.shift()
}

function appendDriver(name) {
    const newName = [...drivers, name];
    return newName
}

function prependDriver(name) {
    const newName = [name, ...drivers];
    return newName
}

function removeLastDriver() {
    const removeDriver = drivers.slice(0,-1)
    return removeDriver
}

function removeFirstDriver() {
    const removeDriver = drivers.slice(1)
    return removeDriver
}

