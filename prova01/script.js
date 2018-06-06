var random = Math.floor((Math.random() * 10) + 1);

document.write("<table border='2'><thead><tr colspan='2'><td>Produto de " + random + "</td></tr></thead>");
document.write("<tbody>");
for(var cont=1;cont<=10;cont++){
	document.write("<tr><td>" + cont + " X " + random + "</td><td>" + cont*random + "</td></tr>");
}
document.write("</tbody></table>");