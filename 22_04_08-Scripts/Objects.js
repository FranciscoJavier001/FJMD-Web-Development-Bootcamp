//**_______________________________________________________________________________________________________________________________________________*/
// const houseKeeper1 = {
//     yearsOfExperience: 12,
//     name: "Jane",
//     cleaningRepertoire: ["bathroom", "lobby", "bedroom"]
// }

//** Constructor HouseKeeper */
function HouseKeeper (yearsOfExperience, name, cleaningRepertoire) {
    this.yearsOfExperience = yearsOfExperience
    this.name = name
    this.cleaningRepertoire = cleaningRepertoire
    this.clean = function() { //** Asi le declaro un metodo al constructor */
        alert("Cleaning in progress")
    }
}

const houseKeeper0 = new HouseKeeper(12, "Jane", ["bathroom", "lobby", "bedroom"])
const houseKeeper1 = new HouseKeeper(12, "Lois", ["kitchen", "studio", "bedroom"])
//** Esta llama al metodo */
const HouseKeeper2 = new HouseKeeper(12, "James", ["bedroom"])
HouseKeeper2.clean()

//** Entonces cuando alguien dice. vamos a crear un constructor, son los propiedades/atributos de un objeto */
function BellBoy (name, age, hasWorkPermit, languages) {
    this.name = name
    this.age = age
    this.hasWorkPermit = hasWorkPermit
    this.languages = languages
}

//** Asi inicializamos un objeto */
const bellBoy1 = new BellBoy("Timmy", 19, true, ["French", "English"])