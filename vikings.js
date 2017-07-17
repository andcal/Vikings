//Clase Vikingo
var Viking = function(name, health, strength) {
	this.name = name;
	this.health = health;
	this.strength = strength;
};

var vik1 = new Viking('Odin', 100, 61);
var vik2 = new Viking('Thor', 120, 8);

//Llama dos vikingo a la lucha
 function pitFight (viking1, viking2) {
 	var turn = 1;
 	var maxH1 = viking1.health * 0.15;
 	var maxH2 = viking2.health * 0.15;
 	var lowHealth = false;
 	do {
 		console.log('Turno ' + turn);
 		//Acción vikingo 1
 		viking2.health = viking2.health - viking1.strength;
 		console.log(viking2.name + " ha recibido " + viking1.strength + " de daño y le queda " + viking2.health + " de vida.");
 		//Acción vikingo 2
 		viking1.health = viking1.health - viking2.strength;
 		console.log(viking1.name + " ha recibido " + viking2.strength + " de daño y le queda " + viking1.health + " de vida.");
 		if(viking1.health < maxH1 || viking2.health < maxH2){
 			lowHealth = true;
 		}
 		if(viking1.health <= 0) {
 			viking1.health = 1;
 		}
 		if(viking2.health <= 0) {
 			viking2.health = 1;
 		}
 		//Nuevo turno
 		turn++;

 	}
 	while (turn <= 5 && !lowHealth);

 	//Ganador del entrenamiento
 	console.log(viking1.name + " tiene " + viking1.health + " de vida.");
 	console.log(viking2.name + " tiene " + viking2.health + " de vida.");
 	if(viking1.health < viking2.health) {
 		console.log("¡" + viking2.name + " ha ganado el entrenamiento!")
 	} else {
 		console.log("¡" + viking1.name + " ha ganado el entrenamiento!")
 	}
 }
