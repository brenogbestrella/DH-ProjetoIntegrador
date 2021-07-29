import { useState } from "react"
import {Link, useHistory } from 'react-router-dom'
import api from "../../Services/api"

import "./Login.css";
import LogoAqui_2 from "../../images/LogoAqui_2.png";
import user from "../../images/user.svg";
import cadeado from "../../images/cadeado.svg";
import Header from "../../components/header/Header"
import Footer2 from "../../components/footer2/Footer2"



function Login() {

    const [ email, setEmail ] = useState("")
    const [ senha, setSenha ] = useState("")

    const history = useHistory();

    async function handleOnClick(e) {
        e.preventDefault();

        if(!email || !senha) return ;

        const { data } = await api.post("/login", {  
            email: email,
            senha: senha,
        }, 
        // {
        //     headers: {
        //         authorization: `bearer ${localStorage.getItem("token")}`
        //     }
        // }
        )

        localStorage.setItem("token", data.token);

        api.defaults.headers.Authorization = `bearer ${data.token}`

        history.push("/app")
    }

  return (

    <body>
          <Header />
    <div className="Login">
       
     
      
            <main className="pagina-login">
                <div className="card-login">
                    <form className="form">
                    <img className="logo_menu_login" src={LogoAqui_2} alt="TraDinDin" />

                    {/* USUÁRIO */}
                    <p className="p-login">
                        <label htmlFor="usuario">
                            <img className="p-img-login" src={user} alt="Email"/>
                        </label>
                        <input className="input-login"
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        />
                    </p>

                    {/* SENHA */}
                    <p className="p-login">
                        <label for="senha">
                            <img className="p-img-login" src={cadeado} alt="Usuário"/>
                        </label>
                        <input className="input-login"
                            id="senha" 
                            placeholder="Senha" 
                            type="password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)} 
                            required />
                    </p>

                    <button type="button" className="botao-submit-login" onClick={handleOnClick}>Entrar agora</button>

                    <Link to ="/" className="voltar-login">Voltar a tela inicial</Link>

                    <Link to ="/senha" className="esqueceu-login">Esqueceu sua senha?</Link>
                    
                    <div className="conta-login">
                        <span>
                            Não tem conta?
                            <Link to ="/cadastro" className="esqueceu-login-clique"> CLIQUE AQUI!</Link>
                        </span>
                    </div>
                    </form>
                </div>
                <Footer2 />
            </main>
    
  </div>
  </body>
  );
}

export default Login;