import "../user/User.css";

function User() {
  return (
    <div className="User">
        <header>
            
        </header>
        <body>
            <div className="perfil">
                <h1>Editar Perfil</h1>
                <h2>ID #784815</h2>
                <div className="perfil-nome">
                <h1>Nome</h1>
                <h2>Ivens Junior</h2>
                <button className="botao-editar" onclick="filterSelection('transhist1')">
                    EDITAR
                </button>
                </div>
                <div className="perfil-email">
                <h1>E-mail</h1>
                <h2>ivenjunior@gmail.com</h2>
                <button className="botao-editar" onclick="filterSelection('transhist1')">
                    EDITAR
                </button>
                </div>
                <div className="perfil-documento">
                <h1>Documento</h1>
                <h2>666.666.666-66</h2>
                <button className="botao-editar" onclick="filterSelection('transhist1')">
                    EDITAR
                </button>
                </div>
                <div className="perfil-senha">
                <h1>Senha</h1>
                <h2>********</h2>
                <button className="botao-editar" onclick="filterSelection('transhist1')">
                    EDITAR
                </button>
                </div>
                <button className="botao-excluir" onclick="filterSelection('transhist1')">
                EXCLUIR CONTA
                </button>
                <button className="botao-atualizar" onclick="filterSelection('transhist1')">
                ATUALIZAR DADOS
                </button>
            </div>
        </body>
        <footer></footer>
  </div>
  );
}

export default User;