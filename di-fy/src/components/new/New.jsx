import React, { useState, useEffect } from "react";
import "./print.css";
import style from "./new.module.css";
import Button from "../button/Button";
import Pick from "./new-page/pick"

function New() {
    const [backgroundColor, setBackgroundColor] = useState("#ffffff");
    const [titleColor, setTitleColor] = useState("#000000");
    const [textColor, setTextColor] = useState("#000000");
    const [imageSrc, setImageSrc] = useState("");

    function removeImage() { setImageSrc(""); }

    function handlePrint() { window.print(); }

    function handleImageChange(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImageSrc(e.target.result);
            };
            imageSrc
            reader.readAsDataURL(file);
        }
    }

    useEffect(() => {
        // Aplica as cores diretamente no DOM
        document.querySelector(".new-page").style.backgroundColor = backgroundColor;
        document.querySelector("#title").style.color = titleColor;
        document.querySelector("#text").style.color = textColor;
        Pick()
    }, [backgroundColor, titleColor, textColor]);

    return (
        <>
            <main className="page new-page">
                <h1>Crie uma nova página do diário</h1>
                <label>
                    <input 
                        type="color" 
                        id="color-background" 
                        className={style.color} 
                        value={backgroundColor} 
                        onChange={(e) => setBackgroundColor(e.target.value)}
                    />
                    <br />
                    Cor do background
                </label>
                <div id="emoji-box">
                    <span id="emoji" className={style.draggable}></span>
                    <br />
                    <span className="obs">Duplo click no emoji para reescolher.</span>
                </div>
                <emoji-picker id="emojiGrid" emoji-version="15.0"></emoji-picker>
                <textarea id="title" defaultValue="Título aqui:" />
                <label>
                    <input 
                        type="color" 
                        id="color-title" 
                        className={style.color} 
                        value={titleColor} 
                        onChange={(e) => setTitleColor(e.target.value)}
                    />
                    <br />
                    Cor do título
                </label>
                <input 
                    type="file" 
                    accept="image/jpeg, image/png" 
                    id="archive" 
                    onChange={handleImageChange} 
                />
                <label id="file-text" htmlFor="archive" className="btn">
                    Adicionar imagem
                </label>
                <span className="obs">
                    Duplo click na imagem para remove-lá.
                </span>
                <div id="area-image">
                    {imageSrc && <img id="selected-image" src={imageSrc} alt="Selected" onDoubleClick={() => removeImage()}/>}
                </div>
                <textarea
                    id="text"
                    defaultValue="Escreva um pouco sobre seu dia, viagens, amigos ou pensamentos..."
                />
                <label>
                    <input 
                        type="color" 
                        id="color-text" 
                        className={style.color} 
                        value={textColor} 
                        onChange={(e) => setTextColor(e.target.value)}
                    />
                    <br />
                    Cor do texto
                </label>
                <div className={style.opcoes}>
                    <Button text="Salvar" />
                    <Button text="Baixar" id="baixar" event="onClick" funct={handlePrint} />
                </div>
            </main>
            <script type="module" src="./js/functs.jsx"></script>
        </>
    );
}

export default New;
