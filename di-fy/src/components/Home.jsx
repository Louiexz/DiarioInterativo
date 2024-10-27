import exemplo from '../assets/exemplo.png'

function Home() {
    return (
        <>
            <main className="page resumo">
                <div id="introducao">
                    <h1>Bem-vindo(a)</h1>
                    <p>Este é um diário interativo online que te permite criar páginas com seu estilo!</p>
                </div>
                <div id="intrucoes">
                    <div id="instrucoes-texto">
                        <h2>Como usar?</h2>
                        <p>É possível mudar cores, estilos de fonte e adicionar imagens/emojis! &#128521</p>
                        <p>Baixe ou salve ao fim da escrita.</p>
                        <p>❌ Não usaremos seus dados.</p>
                        <p>Sinta-se livre para escrever o que quiser.</p>
                        <p>Exemplo de usabilidade</p>
                        <img src={exemplo} id="img-exemplo"/>
                    </div>
                </div>
                <div id="despedida">
                    <h2>Agradecemos por escolher usar o DI-FY!</h2>
                </div>
            </main>
        </>
    )
}
export default Home;