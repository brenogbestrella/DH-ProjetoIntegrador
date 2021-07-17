import { useState } from "react"
import {Link, useHistory} from 'react-router-dom'
import axios from "axios"

import "../login/Login.css";
import LogoAqui_2 from "../images/LogoAqui_2.png";
import user from "../images/user.svg";
import cadeado from "../images/cadeado.svg";
import Header from "../components/header/Header"



function Login() {

    const [ email, setEmail ] = useState("")
    const [ senha, setSenha ] = useState("")

    const history = useHistory();

    async function handleOnClick(e) {
        e.preventDefault();

        await axios.post("http://localhost:3333/login", {  
            email: email,
            senha: senha,
        })
        if(email && senha ) {
            history.push("/app")
        } else {
            history.push("/login")
        }
    }

        // 1- axios
        // 2- chamada para o backend(login)
        // 3- se deu tudo certo, redirecionar para /app usando o useHistory

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

                    <button type="button" className="botao-submit" onClick={handleOnClick}>Entrar agora</button>

                    <Link to ="/" className="voltar">Voltar a tela inicial</Link>

                    <Link to ="/senha" className="esqueceu">Esqueceu sua senha?</Link>
                    
                    <div className="conta">
                        <span>
                            Não tem conta?
                            <Link to ="/cadastro" className="aa">Clique aqui</Link>
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