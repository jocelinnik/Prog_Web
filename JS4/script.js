(function (){
	var clicou = document.getElementById("botao");
	clicou.onclick = function(){
		var raio = document.circulo.raio.value;
		var area = document.circulo.area;
		area.value = (Math.PI * raio*raio).toFixed(2);
		var circunferência = document.circulo.circunferência;
		circunferência.value = (2 * Math.PI * raio).toFixed(2);
		return false;
	}
})();