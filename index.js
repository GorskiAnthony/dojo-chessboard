// Dojo
const chessboard = [];

for (let h = 0; h < 8; h++) {
	// Horizontal est la valeur en ordonnées
	// elle va de a -> h
	// pour avoir un caractère alphabétique je vais use le code ascii
	chessboard.push([]);
	for (let v = 1; v <= 8; v++) {
		// Ensuite, j'ajoute la 2eme boucle pour les chiffres.
		chessboard[h].push(`${String.fromCharCode(97 + h)} - ${v}`);
	}
}

console.log(chessboard);
