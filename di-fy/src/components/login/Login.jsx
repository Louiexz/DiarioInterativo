import "./login.module.css"
import Button from "../button/Button";

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
                <Button id="entrar" text="Entrar" deactived={true}/>
                <Button id="recuperar" text="Esqueceu sua senha?" deactived={true}/>
                <Button id="cadastro" text="Registre-se" deactived={true}/>
            </main>
        </>
    )
}
export default Login;
