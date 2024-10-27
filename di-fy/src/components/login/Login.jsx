import "./login.module.css"

function Login() {
    return (
        <>
            <main className="page login">
                <h1>Login</h1>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span>Usuário:</span>
                    </div>
                    <input type="text"/>
                </div>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span>Senha:</span>
                    </div>
                    <input type="password"/>
                </div>
                <a id="entrar"><button type="button" className="btn btn-success">Entrar</button></a>
                <a id="recuperar"><button type="button" className="btn btn-link">Esqueceu sua senha?</button></a>
                <a id="cadastro"><button type="button" className="btn btn-link">Registre-se</button></a>
            </main>
        </>
    )
}
export default Login;
