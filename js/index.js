import { Draggable } from "./components/drag.js"
import { Historic } from "./pages/historico.js";
import { LinksFuncts } from './pages/links.js';
/*import {Login} from "./components/login.js";
import {Register} from './pages/registro.js';*/
import { Uteis } from './components/uteis.js';

const history = new Historic();
const links = new LinksFuncts();
const uteis = new Uteis();

links.allLinks();

if (window.location.pathname.includes("nova-pagina.html")) {
    document.getElementById("arquivo").addEventListener('change', function() {
        uteis.showImage();
    });
    const emojiGrid = document.querySelector('emoji-picker')
    const emoji = document.querySelector("#emoji")
    emojiGrid.addEventListener('emoji-click', event => {
        emoji.innerHTML = event.detail.unicode;
        // Esconder o emoji-picker
        emojiGrid.style.display = "none";
    });
    var draggables = document.querySelectorAll(".draggable");
    [].forEach.call(draggables, function (draggable) {
        new Draggable(draggable);
    });
    document.addEventListener('DOMContentLoaded', function() {
        console.log("Emoji Element:", emoji);
        emoji.addEventListener('contextmenu', function(event) {
            event.currentTarget.style.fontSize = "170%";
        });
        emoji.addEventListener('click', function(event) {
            emoji.style.fontSize = "400%";
        });
    });
    
    
};
if (window.location.pathname.includes("historico.html")) {
    history.getPages();
};