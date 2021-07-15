import { useState } from "react"
import {Link} from 'react-router-dom'
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
    const [ tipo, setTipo ] = useState("")


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
                        name="tipo"
                        id="comprar"
                        value="comprar"
                        value={tipo}
                        onChange={(e) => setTipo(e.target.value)}
                        checked
                    />
                    <label for="comprar">Pessoa Física</label>
                    <input type="radio" name="acao" id="vender" value="vender" />
                    <label for="vender">Pessoa Jurídica</label>
                </div>
                
                <Link to ="/" className="botao-submit" type="submit">Registrar</Link>
                {/* <input className="botao-submit" type="submit" value="Registrar" /> */}

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