import "../login/Login.css";
import LogoAqui_2 from "../images/LogoAqui_2.png";
import user from "../images/user.svg";
import cadeado from "../images/cadeado.svg";




function Login() {
  return (
    <div className="Login">
        <header>

        </header>
        <body>
            <main className="pagina-login">
                <div className="card-login">
                    <form className="form">
                    <img className="logo_menu" src={LogoAqui_2} alt="TraDinDin" />

                    {/* USUÁRIO */}
                    <p>
                        <label for="usuario"
                        ><img src={user} alt="Usuário"
                        /></label>
                        <input
                        type="text"
                        name="usuario"
                        id="usuario"
                        placeholder="Usuário"
                        />
                    </p>

                    {/* SENHA */}
                    <p>
                        <label for="senha"
                        ><img src={cadeado} alt="Usuário"
                        /></label>
                        <input id="senha" placeholder="Senha" type="password" required />
                    </p>

                    <input className="botao-submit" type="submit" value="Entrar agora" />
                    <button className="voltar">Voltar a tela inicial</button>

                    <p className="esqueceu">Esqueceu sua senha?</p>
                    
                    <div className="conta">
                        <span
                        >Não tem conta?
                        <a className="aa" href=""> Clique aqui</a></span>
                    </div>
                    </form>
                </div>
            </main>
        </body>
  </div>
  );
}

export default Login;