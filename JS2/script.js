function jokenpol(){
	var player;
	var machine;
	var saiu = false;
	var ganhou = 0;

	while(!saiu){
		console.log("Escolha sua jogada: \n1 - Papel\n2 - Pedra\n3 - Tesoura");
		player = prompt("DIGITE UMA JOGADA: ");

		if(((player!=1)&&(player!=2))&&(player!=3)){
			console.log("JOGADA INVALIDA");
			saiu = true;
		}else{
			machine = 1 + (Math.floor(Math.random() * 3));
			if(machine==1){
				console.log("O computador jogou Papel");
			}else if(machine==2){
				console.log("O computador jogou Pedra");
			}else if(machine==3){
				console.log("O computador jogou Tesoura");
			}
			if(player==machine){
				console.log("A rodada empatou!");
			}else{
				if((player==1)&&(machine==2)){
					console.log("Você ganhou!");
					ganhou++;
				}else if((player==1)&&(machine==3)){
					console.log("Você perdeu! A sua pontuação foi de " + ganhou);
					saiu = true;
				}else if((player==2)&&(machine==1)){
					console.log("Você perdeu! A sua pontuação foi de " + ganhou);
					saiu = true;
				}else if((player==2)&&(machine==3)){
					console.log("Você ganhou!");
					ganhou++;
				}else if((player==3)&&(machine==1)){
					console.log("Você ganhou!");
					ganhou++;
				}else if((player==3)&&(machine==2)){
					console.log("Você perdeu! A sua pontuação foi de " + ganhou);
					saiu = true;
				}
			}
		}
	}	
}

jokenpol();