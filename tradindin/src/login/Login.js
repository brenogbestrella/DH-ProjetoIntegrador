import { useState } from "react"
import {Link} from 'react-router-dom'

import "../login/Login.css";
import LogoAqui_2 from "../images/LogoAqui_2.png";
import user from "../images/user.svg";
import cadeado from "../images/cadeado.svg";
import Header from "../components/header/Header"



function Login() {
    const [ email, setEmail ] = useState("")
    const [ senha, setSenha ] = useState("")

  return (
    <div className="Login">
       
       <Header />
      
        <body>
            <main className="pagina-login">
                <div className="card-login">
                    <form className="form">
                    <img className="logo_menu" src={LogoAqui_2} alt="TraDinDin" />

                    {/* USUÁRIO */}
                    <p>
                        <label for="usuario">
                            <img src={user} alt="Email"/>
                        </label>
                        <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        />
                    </p>

                    {/* SENHA */}
                    <p>
                        <label for="senha">
                            <img src={cadeado} alt="Usuário"/>
                        </label>
                        <input 
                            id="senha" 
                            placeholder="Senha" 
                            type="password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)} 
                            required />
                    </p>

                    <Link to ="/app" className="botao-submit" type="submit">Entrar agora</Link>
                    {/* <input className="botao-submit" type="submit" value="Entrar agora" /> */}

                    <Link to ="/" className="voltar">Voltar a tela inicial</Link>
                    {/* <button className="voltar">Voltar a tela inicial</button> */}

                    <Link to ="/senha" className="esqueceu">Esqueceu sua senha?</Link>
                    {/* <p className="esqueceu">Esqueceu sua senha?</p> */}
                    
                    <div className="conta">
                        <span>
                            Não tem conta?
                            <Link to ="/cadastro" className="aa">Clique aqui</Link>
                            {/* <a className="aa" href=""> Clique aqui</a> */}
                        </span>
                    </div>
                    </form>
                </div>
            </main>
        </body>
  </div>
  );
}

export default Login;