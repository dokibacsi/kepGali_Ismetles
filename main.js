import kisKepMegjelenito from "./jsFiles/kisKepMegjelenito.js";
import nagyKepMegjelenito from "./jsFiles/nagyKepMegjelenito.js";

$(() => {
    new kisKepMegjelenito($("#kiskepTarolo"));
    new nagyKepMegjelenito($("#nagykepTarolo"));
})