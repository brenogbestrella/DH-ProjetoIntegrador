import { useEffect, useState } from "react"
import { useHistory  } from 'react-router-dom'
import api from "../../Services/api";
import "./Perfil.css";
import image_01 from "../../images/image_01.png";
import Footer2 from "../../components/footer2/Footer2";

function Perfil() {

    const [ nome, setNome ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ senha, setSenha ] = useState("");
    const [ documento, setDocumento ] = useState("");
    const [ telefone, setTelefone ] = useState("");


    const history = useHistory();

    
    async function handleUpdate (e) {
        e.preventDefault();

        await api.put("/usuarios", {
            nome: nome,
            email: email,
            senha: senha,
            documento: documento,
            telefone: telefone,
        })

        history.push("/perfil") 
    }

    async function handleDelete (e) {
        e.preventDefault();

        await api.delete("/usuarios");

        localStorage.clear();

        history.push("/"); 
    }

    useEffect(() => {  
        async function loadUsuario() {
            const { data } = await api.get('/usuarios/meuperfil');
        
            setNome(data.nome);
            setEmail(data.email);
            setDocumento(data.documento);
            setTelefone(data.telefone);
            
          }
    

        loadUsuario();
      }, []);


  return (
    <body>
    <div className="Perfil">
            <div className="cla-perfil">

                <div className="moldura-perfil">
                    <span className="user-titulo-moldura">EDITAR PERFIL</span>
                    <h2 className="user-sub-titulo-moldura">ID #784815</h2>


                    <div className="perfil-nome-user">
                            
                            <div className="user-sub-titulo-b">
                            <div className="user-sub-titulo-2"> <img class="app-icone-perfil" src={image_01} alt="Ícone"></img> </div>
                            <div className="user-sub-titulo-c"> Sua imagem </div>

                            </div>
                    </div>

                        <div className="perfil-nome-user">
                            <div className="user-titulo"> <h1>Nome</h1> </div>
                            <div className="botao-editar10"><input type="text" value={nome} onChange={(e) => setNome(e.target.value)}></input></div>
                    
                        </div>

                        <div className="perfil-nome-user">
                           <div className="user-titulo"> <h1>E-mail</h1> </div>                    
                            <div className="botao-editar10"><input type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input></div>

                        </div>

                        <div className="perfil-nome-user">
                           <div className="user-titulo"> <h1>Documento</h1> </div>
                            <div className="botao-editar10"><input type="text" value={documento} onChange={(e) => setDocumento(e.target.value)}></input></div>
                        </div>

                        <div className="perfil-nome-user">
                           <div className="user-titulo"> <h1>Telefone</h1> </div>
                            <div className="botao-editar10"><input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)}></input></div>

                        </div>

                        <div className="perfil-nome-user">
                           <div className="user-titulo"> <h1>Senha</h1> </div>
                            <div className="botao-editar10"><input type="text" placeholder="***********" value={senha} onChange={(e) => setSenha(e.target.value)}></input></div>
                        </div>

                        <div className="user-submi">
                            <div className="user-sub1"><button className="botao-editar2" onClick={handleDelete}> EXCLUIR CONTA </button></div>
                            <div className="user-sub1"><button className="botao-editar3" onClick={handleUpdate}> ATUALIZAR DADOS </button></div>
                        </div>
                        </div>

                </div>
    
     
  </div>
  <Footer2 />
  </body>
  
  );
}

export default Perfil;