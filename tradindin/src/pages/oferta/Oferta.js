import "./Oferta.css";
import { useState, useEffect } from "react"
import { useHistory  } from 'react-router-dom'
import api from "../../Services/api";
import { getMoedas } from "./apiMoeda"
import Footer2 from "../../components/footer2/Footer2";





function Oferta2() {

    const [ data, setData] = useState("");
    const [ quantidade, setQuantidade ] = useState("");
    const [ endereco, setEndereco ] = useState("");
    const [ moeda, setMoeda ] = useState("");
    const [ listaMoedas, setListaMoedas] = useState([]);
    const history = useHistory();


    useEffect(() => {
        async function loadMoedasList() {
          const moedasBackend = await getMoedas();
          setListaMoedas(moedasBackend);
        }
    
        loadMoedasList()
      },[]);

    async function handleOnClick (e) {
        e.preventDefault();

        if(!moeda || !quantidade || !data || !endereco) return;

        await api.post("/ofertas", {
            fk_idMoeda: moeda,
            quantidade: quantidade,    
            data: data,
            endereco: endereco,
        })
        
        history.push("/app")
       
    }


    return (
        <body>
        <div className="Oferta2">
          
                <div className="cla-oferta">
    
                    <div className="moldura-oferta">
                        <spam className="user-titulo-moldura-oferta">CADASTRAR OFERTA</spam>
                        <h2 className="user-sub-titulo-moldura-oferta">Selecione o que você deseja trocar com outros usuários!</h2>
    
    
    
                            <div className="oferta-nome-user">
                                
                                <div className="user-sub-titulo-b-oferta">
                                    <div className="user-sub-titulo-oferta">MOEDA</div>

                                    <select className="botao-editar-oferta" name="moeda" id="moeda" onChange={(e) => setMoeda(e.target.value)}>
                                        {listaMoedas.map(({ nome, id_moeda }) => (
                                        <option
                                            key={id_moeda}
                                            value={id_moeda}
                                        >
                                            {nome}
                                        </option>
                                        ))}
                                
                                    </select>
                                </div>
                            </div>


                            <div className="oferta-nome-user">
                                
                                <div className="user-sub-titulo-b-oferta">
                                    <div className="user-sub-titulo-oferta">QUANTIDADE</div>

                                    <label htmlFor="quantidade"></label>
                                    <input className="botao-editar-oferta-quantidade"
                                        id="quantidade" 
                                        name="quantidade" 
                                        required="required" 
                                        type="number" 
                                        placeholder="Insite um número"
                                        value={quantidade}
                                        onChange={(e) => setQuantidade(e.target.value)} 
                                    /> 
                                </div>
                            </div>

                            <div className="oferta-nome-user">
                                
                                <div className="user-sub-titulo-b-oferta">
                                    <div className="user-sub-titulo-oferta">ENDEREÇO</div>

                                    <label htmlFor="endereco"></label>
                            <input className="botao-editar-oferta-quantidade"
                                id="endereco" 
                                name="endereco" 
                                required="required" 
                                type="text" 
                                placeholder="Exemplo: Brasil – SP"
                                value={endereco}
                                onChange={(e) => setEndereco(e.target.value)}
                            /> 
                                </div>
                            </div>

                            <div className="oferta-nome-user">
                                
                                <div className="user-sub-titulo-b-oferta">
                                    <div className="user-sub-titulo-oferta">DATA</div>

                                    <label htmlFor="data"></label>
                                    <input 
                                className="input-endereco"
                                type="date"
                                name="data-retirada"
                                id="data retirada"
                                placeholder="xx/xx/xxxx"
                                value={data}
                                onChange={(e) => setData(e.target.value)} />
                                    {/* <DatePicker
                                        locale="ptBR" 
                                        selected={startDate} 
                                        onChange={(date) => 
                                        setStartDate(date)} 
                                        dateFormat="dd/MM/yyyy"
                                    /> */}
                                </div>
                            </div>
    
                            <div className="user-submi-oferta">
                                <div className="user-sub1-oferta"><button className="botao-editar-oferta3" onClick={handleOnClick}> CADASTRAR OFERTA </button></div>
                            </div>
                            </div>
    
                    </div>
        
         
      </div>
      <Footer2 />
      </body>
      
      );
    }
    
    export default Oferta2;