//Clase Vikingo
var Viking = function(name, currHealth, strength) {
	this.name = name;
	this.currHealth = currHealth;
	this.strength = strength;

};

var vik1 = new Viking('Odin', 100, 15);
var vik2 = new Viking('Thor', 120, 8);

//Llama dos vikingo a la lucha
 function pitFight (viking1, viking2) {
 	var turn = 1;
 	var start = Math.random();

 	do {
 		console.log("Turno " + turn);
 		if(start<0.5){
	 		if(viking2.currHealth > viking1.strength){
	 			viking2.currHealth = viking2.currHealth - viking1.strength;
	 			console.log(viking2.name + " le queda " + viking2.currHealth + " de vida tras recibir " + viking1.strength + " de daño!");
	 		}else{
	 			console.log(viking1.name + " le perdona la vida al ver que " + viking2.name + " esta tambalándose")
	 			console.log("¡" + viking1.name + " ha ganado el entrenamiento!")
	 			return;
	 		}
	 		if(viking1.currHealth > viking2.strength){
	 			viking1.currHealth = viking1.currHealth - viking2.strength;
	 			console.log(viking1.name + " le queda " + viking1.currHealth + " tras recibir " + viking2.strength + " de daño!");
	 		}else{
	 			console.log(viking2.name + " le perdona la vida al ver que " + viking1.name + " esta tambalándose")
	 			console.log("¡" + viking2.name + " ha ganado el entrenamiento!")
	 			return;
	 		}
	 	}else{
	 		if(viking1.currHealth > viking2.strength){
	 			viking1.currHealth = viking1.currHealth - viking2.strength;
	 			console.log(viking1.name + " le queda " + viking1.currHealth + " tras recibir " + viking2.strength + " de daño!");
	 		}else{
	 			console.log(viking2.name + " le perdona la vida al ver que " + viking1.name + " esta tambalándose")
	 			console.log("¡" + viking2.name + " ha ganado el entrenamiento!")
	 			return;
	 		}
	 		if(viking2.currHealth > viking1.strength){
	 			viking2.currHealth = viking2.currHealth - viking1.strength;
	 			console.log(viking2.name + " le queda " + viking2.currHealth + " de vida tras recibir " + viking1.strength + " de daño!");
	 		}else{
	 			console.log(viking1.name + " le perdona la vida al ver que " + viking2.name + " esta tambalándose")
	 			console.log("¡" + viking1.name + " ha ganado el entrenamiento!")
	 			return;
	 		}
	 	}
	 	start = Math.random();
 		turn++;
 	}
 	while (turn <= 5);

 	console.log("A " + viking1.name + " le queda " + viking1.currHealth + " de vida");
 	console.log("A " + viking2.name + " le queda " + viking2.currHealth + " de vida");

 	if(viking1.currHealth < viking2.currHealth){
 		console.log(viking2.name + " ha ganado");
 	}else{
 		console.log(viking1.name + " ha ganado");
 	}
 }

