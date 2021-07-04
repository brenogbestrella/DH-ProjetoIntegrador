import "../user/User.css";
import logo_trad1 from "../images/logo_trad1.png"

function User() {
  return (
    <div className="User">
        <header>
            <div className="navbar-container">
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <a href="" className="navbar-brand mb-0 h1">
                    <img
                    className="d-inline-block align-top"
                    id="logo-navbar"
                    src={logo_trad1}
                    width="150"
                    Navbar
                    />
                </a>
                <button
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    className="navbar-toggler"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="div.collpase.navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                        <a
                        href=""
                        className="nav-link dropdown-toggle"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        >
                        Usuário
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a href="" className="dropdown-item">Perfil</a></li>
                        <li><a href="" className="dropdown-item">Endereços</a></li>
                        <li><a href="" className="dropdown-item">Carteira</a></li>
                        <li><a href="" className="dropdown-item">Ajuda</a></li>
                        </ul>
                    </li>
                    </ul>
                </div>
                </nav>
            </div>
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