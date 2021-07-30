import { useState } from "react"
import { useHistory  } from 'react-router-dom'
import api from "../../Services/api";
import "./Perfil.css";
import image_01 from "../../images/image_01.png";
import Header2 from "../../components/header2/Header2";
import Footer2 from "../../components/footer2/Footer2";

function Perfil() {

    const [ nome, setNome ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ senha, setSenha ] = useState("");
    const [ documento, setDocumento ] = useState("");
    const [ telefone, setTelefone ] = useState("");
    const [ tipo, setTipo ] = useState("");

    const history = useHistory();

    function handleEditar (e) {
        e.preventDefault();
    }
    
    async function handleUpdate (e) {
        e.preventDefault();

        await api.put("/usuarios", {
            nome: nome,
            email: email,
            senha: senha,
            documento: documento,
            telefone: telefone,
            tipo: tipo
        })

        history.push("/perfil") 
    }

    async function handleDelete (e) {
        e.preventDefault();

        await api.delete("/usuarios")

        history.push("/app") 
    }


  return (
    <body>
    <div className="Perfil">
        <Header2 />
      
            <div className="cla-perfil">

                <div className="moldura-perfil">
                    <spam className="user-titulo-moldura">EDITAR PERFIL</spam>
                    <h2 className="user-sub-titulo-moldura">ID #784815</h2>


                    <div className="perfil-nome-user">
                            
                            <div className="user-sub-titulo-b">
                            <div className="user-sub-titulo-2"> <img class="app-icone-perfil" src={image_01} alt="Ícone"></img> </div>
                            <div className="user-sub-titulo-c"> Sua imagem </div>
                            <div className="user-botao"><button className="botao-editar-img" onclick={handleEditar}> EDITAR </button></div>
                            </div>
                    </div>

                        <div className="perfil-nome-user">
                           <div className="user-titulo"> <h1>Nome</h1> </div>
                            
                            <div className="user-sub-titulo-b">
                            <div className="user-sub-titulo"> Ivens Junior </div>
                            <div className="user-botao"><button className="botao-editar" onclick={handleEditar}> EDITAR </button></div>
                            </div>
                        </div>

                        <div className="perfil-nome-user">
                           <div className="user-titulo"> <h1>E-mail</h1> </div>
                            
                            <div className="user-sub-titulo-b">
                            <div className="user-sub-titulo">ivenjunior@gmail.com</div>
                            <div className="user-botao"><button className="botao-editar" onclick={handleEditar}> EDITAR </button></div>
                            </div>
                        </div>

                        <div className="perfil-nome-user">
                           <div className="user-titulo"> <h1>Documento</h1> </div>
                            
                            <div className="user-sub-titulo-b">
                            <div className="user-sub-titulo">666.666.666-66</div>
                            <div className="user-botao"><button className="botao-editar" onclick={handleEditar}> EDITAR </button></div>
                            </div>
                        </div>

                        <div className="perfil-nome-user">
                           <div className="user-titulo"> <h1>Telefone</h1> </div>
                            
                            <div className="user-sub-titulo-b">
                            <div className="user-sub-titulo">+55 11 97566 8558</div>
                            <div className="user-botao"><button className="botao-editar" onclick={handleEditar}> EDITAR </button></div>
                            </div>
                        </div>

                        <div className="perfil-nome-user">
                           <div className="user-titulo"> <h1>Senha</h1> </div>
                            
                            <div className="user-sub-titulo-b">
                            <div className="user-sub-titulo">********</div>
                            <div className="user-botao"><button className="botao-editar" onclick={handleEditar}> EDITAR </button></div>
                            </div>
                        </div>

                        <div className="user-submi">
                            <div className="user-sub1"><button className="botao-editar2" onclick={handleDelete}> EXCLUIR CONTA </button></div>
                            <div className="user-sub1"><button className="botao-editar3" onclick={handleUpdate}> ATUALIZAR DADOS </button></div>
                        </div>
                        </div>

                </div>
    
     
  </div>
  <Footer2 />
  </body>
  
  );
}

export default Perfil;