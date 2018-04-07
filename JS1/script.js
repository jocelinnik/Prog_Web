var conti, contj;

for(conti=1;conti<=10;conti++){
	document.write("<table border='1'>");
	document.write("<tr><th colspan='2'>Produtos de " + conti + "</th></tr>");

	for(contj=1;contj<=10;contj++){
		var saida = "<tr><td>" + conti + "X" + contj + "</td>" + "<td>" + conti*contj + "</td></tr>";
		document.write(saida);
	}
	document.write("</table>");
}