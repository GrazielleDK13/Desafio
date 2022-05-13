import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/Img/Logo.png";
import '../../Assets/styles/headerST/topo.css';

export const Header = (props) => {

    return (

        <div className="topo">

            <div className="agrupar">

                <div className="DVlogo">

                    <img className="logo" src={logo} alt="Logo do App de Filmes" />

                    <div>

                        <p className="txtprincipal">{props.objeto.descricao}</p>
                        <p className="txtprincipal2">{props.objeto.segundaDc}</p>

                    </div>

                </div>

                <div className="DVlink">

                    <Link to='/' className="link">Home</Link>
                    <Link to='/Cadastro' className="link">Usuários</Link>
                    <Link to='/filmes' className="link">Filmes</Link>
                    <Link to='/generos' className="link">Gênero</Link>

                </div>

            </div>


        </div>

    );

}

export default Header;
