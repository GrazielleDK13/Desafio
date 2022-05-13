import React from "react";
import logo2 from "../../Assets/Img/Logo2.png"
import '../../Assets/styles/footerST/rodape.css'

export const Footer = () => {

    return(

        <div className="rodape">

            <img className="RPlogo" src={logo2} alt="Logo do app de filmes" />

            <div className="linha"></div>

            <div className="contatos">

                <p>Company Inc., 8901 Marmora Road, Glasgow, D04 89GR</p>
                <br/>
                <p>Call us now toll free: (800)2345-6789</p>
                <br/>
                <p>Customer support: support@demolink.org</p>
                <br/>
                <p>Skype: sample-username</p>

            </div>



        </div>
    );

}

export default Footer;
