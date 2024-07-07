import { Draggable } from "./drag.js";

export var Pick = function() {
    const emojiGrid = document.querySelector('emoji-picker')
    const emoji = document.querySelector("#emoji")
    
    emojiGrid.addEventListener('emoji-click', event => {
        emoji.innerHTML = event.detail.unicode;
        // Esconder o emoji-picker
        emojiGrid.style.display = "none";
    });
    emoji.addEventListener('dblclick', ()=> {
        emojiGrid.style.display = "block";
    });
    
    var draggables = document.querySelectorAll(".draggable");
    [].forEach.call(draggables, function (draggable) {
        new Draggable(draggable);
    });
}