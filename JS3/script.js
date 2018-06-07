function someFn(inicio) {
	var adicionar;
	adicionar = function (incremento) {
		inicio+=incremento;
		return inicio;
	}

	return adicionar;
}

var adicionar = someFn(1);

console.log('PRIMEIRA CHAMADA ' + adicionar(3));
console.log('SEGUNDA CHAMADA ' + adicionar(1));
console.log('TERCEIRA CHAMADA ' + adicionar(5));