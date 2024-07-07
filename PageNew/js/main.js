import { Pick } from "./new-page/pick.js"

Pick()

document.querySelector('#baixar').addEventListener('click', ()=> {
    window.print()
})