import React, { useState } from "react"
import api from "../../Services/api";
import {Link, useHistory} from 'react-router-dom'
import "./Cadastro.css";
import LogoAqui_2 from "../../images/LogoAqui_2.png";
import user from "../../images/user.svg";
import cadeado from "../../images/cadeado.svg";
import o_email from "../../images/o_email.svg";
import identidade from "../../images/identidade.png";
import phone from "../../images/telefone.png";
import Header from "../../components/header/Header"
import Footer2 from "../../components/footer2/Footer2"


function Cadastro() {
    const [ nome, setNome ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ senha, setSenha ] = useState("")
    const [ documento, setDocumento ] = useState("")
    const [ telefone, setTelefone ] = useState("")
    const [ radio, setRadio ] = useState("")

    const history = useHistory();

    async function handleOnClick (e) {
        e.preventDefault();

        await api.post("/usuarios", {
            nome: nome,    
            email: email,
            senha: senha,
            documento: documento,
            telefone: telefone,
            tipo: radio,
            })
        if(nome && email && senha && documento && telefone && radio) {
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
                <p className="p-cadastro">
                    <label htmlFor="nome"><img className="p-img-cadastro" src={user} alt="" /></label>
                    <input className="input-cadastro"
                    type="text"
                    name="nome"
                    id="nome"
                    placeholder="Nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    />
                </p>
               
                {/* Email */}
                <p className="p-cadastro">
                    <label htmlFor="email"><img className="p-img-cadastro" src={o_email} alt="" /></label>
                    <input className="input-cadastro"
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </p>

                 {/* senha */}
                 <p className="p-cadastro">
                    <label htmlFor="senha"><img className="p-img-cadastro" src={cadeado} alt="" /></label>
                    <input className="input-cadastro"
                        type="password"
                        name="senha"
                        id="senha"
                        placeholder="Senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                </p>

                {/* DOCUMENTO */}
                <p className="p-cadastro">
                    <label htmlFor="documento"><img className="p-img-cadastro" src={identidade} alt="" /></label>
                    <input className="input-cadastro"
                        type="text"
                        name="documento"
                        id="documento"
                        placeholder="Documento"
                        value={documento}
                        onChange={(e) => setDocumento(e.target.value)}
                    />
                </p>

                {/* TELEFONE */}
                                <p className="p-cadastro">
                    <label htmlFor="documento"><img className="p-img-cadastro" src={phone} alt="" /></label>
                    <input className="input-cadastro"
                        type="text"
                        name="telefone"
                        id="telefone"
                        placeholder="Telefone"
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                    />
                </p>

                <div className="cadastro-radio_elemento_3">
                    <input className="input-cadastro"
                        id="pf"
                        type="radio"
                        checked={radio === "1"}
                        value="1"
                        onChange={(e)=>{ setRadio(e.target.value); console.log(e.target.value)}}
                        
                    />
                    <label htmlFor="pf" className="input-cadastro-text">Pessoa Física</label>
                    <input className="input-cadastro"
                        id="pj"
                        type="radio" 
                        checked={radio === "0"}
                        value="0"
                        onChange={(e)=>{ setRadio(e.target.value)}} 
                    />
                    <label htmlFor="pj" className="input-cadastro-text">Pessoa Jurídica</label>
                </div>
                
                <button type="submit" className="cadastro-botao-submit" onClick={handleOnClick}>Cadastrar</button>

                <Link to ="/" className="voltar-cadastro">Voltar a tela inicial</Link>
                {/* <button className="voltar">Voltar a tela inicial</button> */}
                </form>
            </div>
            <Footer2 />
            </main>
        </body>
  </div>
  );
}

export default Cadastro;