// 1
let elem1 = document.getElementById('elem1')
let elem2 = document.getElementById('elem2')
let elem3 = document.getElementById('elem3')
function func() {
	console.log(this.value);
}
func.call(elem1)
func.call(elem2)
func.call(elem3)

//2
let elem = document.querySelector('#elem');

function func1(surname, name) {
	console.log(this.value + ', ' + name + ' ' + surname);
}

func1.call(elem, 'Smit', 'John'); // тут должно вывести 'hello, John Smit'

// 3
function func2(surname, name) {
	console.log(this.value + ', ' + name + ' ' + surname);
}

func2.apply(elem, ['Smit', 'John']); // тут должно вывести 'hello, John Smit'

// 4
function func3(name, surname) {
	console.log(this.value + ', ' + name + ' ' + surname);
}

let bin = func3.bind(elem);

bin('John', 'Smit'); // тут должно вывести 'hello, John Smit'
bin('Eric', 'Luis'); // тут должно вывести 'hello, Eric Luis'
