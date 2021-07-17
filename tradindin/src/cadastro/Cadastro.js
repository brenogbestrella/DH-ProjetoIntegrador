import React, { useState } from "react"
import axios from "axios";
import {Link, useHistory} from 'react-router-dom'
import "../cadastro/Cadastro.css";
import LogoAqui_2 from "../images/LogoAqui_2.png";
import user from "../images/user.svg";
import cadeado from "../images/cadeado.svg";
import o_email from "../images/o_email.svg";
import identidade from "../images/identidade.png";
import Header from "../components/header/Header"


function Cadastro() {
    const [ nome, setNome ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ senha, setSenha ] = useState("")
    const [ documento, setDocumento ] = useState("")
    const [ radio, setRadio ] = useState("")

    const history = useHistory();

    async function handleOnClick (e) {
        e.preventDefault();

        await axios.post("http://localhost:3333/usuarios", {
            nome: nome,    
            email: email,
            senha: senha,
            documento: documento,
            tipo: radio,
            })
        if(nome && email && senha && documento && radio) {
            history.push("/login")
        } else {
            history.push("/cadastro")
        }
    }

  return (
    <div className="Cadastro">
 <Header />
        <body>
            <main className="pagina-cadastro">
            <div className="card-cadastro">
                <form className="form2">
                <img
                    className="logo-cadastro"
                    src={LogoAqui_2}
                    alt="TraDinDin"
                />
                {/* NOME */}
                <p>
                    <label for="nome"><img src={user} alt="" /></label>
                    <input
                    type="text"
                    name="nome"
                    id="nome"
                    placeholder="Nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    />
                </p>
               
                {/* Email */}
                <p>
                    <label for="email"><img src={o_email} alt="" /></label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </p>

                 {/* senha */}
                 <p>
                    <label for="senha"><img src={cadeado} alt="" /></label>
                    <input
                        type="password"
                        name="senha"
                        id="senha"
                        placeholder="Senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                </p>

                {/* CPF */}
                <p>
                    <label for="documento"><img src={identidade} alt="" /></label>
                    <input
                        type="text"
                        name="documento"
                        id="documento"
                        placeholder="Documento"
                        value={documento}
                        onChange={(e) => setDocumento(e.target.value)}
                    />
                </p>

                <div className="radio_elemento_3">
                    <input
                        type="radio"
                        checked={radio === "1"}
                        value="1"
                        onChange={(e)=>{ setRadio(e.target.value)}}
                        
                    />
                    <label>Pessoa Física</label>
                    <input 
                        type="radio" 
                        checked={radio === "0"}
                        value="0"
                        onChange={(e)=>{ setRadio(e.target.value)}} 
                    />
                    <label>Pessoa Jurídica</label>
                </div>
                
                <button type="submit" className="botao-submit" onClick={handleOnClick}>Cadastrar</button>

                <Link to ="/" className="voltar">Voltar a tela inicial</Link>
                {/* <button className="voltar">Voltar a tela inicial</button> */}
                </form>
            </div>
            </main>
        </body>
  </div>
  );
}

export default Cadastro;