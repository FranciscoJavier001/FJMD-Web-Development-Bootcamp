//**_______________________________________________________________________________________________________________________________________________*/

const fs = require("fs")

//** Aunque le cambie algo a file2 el que va a remplazar el texto es el file1 que manda, osea el source */
fs.copyFileSync("file1.txt", "file2.txt") //** Asi puedo crear otro archivo, el primero es el src y el segundo el destino */