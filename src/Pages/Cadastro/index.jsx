import React from "react";
import '../../Assets/styles/CadastroST/style.css'
import Header from '../../Components/header/header'
import Footer from '../../Components/footer/footer'

export const Cadastro = () => {

    let header2 = {
        descricao: "Faça o Cadastro de usuários e  edite, caso necessário",
        segundaDc: "Pronto para cadastrar? "
    }

    return (

        <div>

            <Header  objeto={header2} />


            <p className="TCadastro">Cadastro</p>

            <section className="loginflex">

                <div className="DVcadastro">

                    <div className="cadastroCL">

                        <label for="nome">Nome</label>
                        <input className="IPcadastro" type="text" name="Digite seu nome " id="nome" />

                    </div>

                    <div className="cadastroCL">

                        <label for="nome">E-mail</label>
                        <input className="IPcadastro" type="email" name="Digite seu Email " id="email" />

                    </div>

                    <div className="cadastroCL">

                        <label for="nome">Telefone</label>
                        <input className="IPcadastro" type="text" name="Digite seu telefone " id="Telefone" />

                    </div>

                </div>


                <div className="DVBTcadastrar">

                    <button className="botao"type="submit">Cadastrar</button>

                </div>


            </section>



            <section className="listClientes">

                <div className="clientes">

                    <p className="clientN">Paulo Andre</p>
                    <p className="clientE">paulo@email.com</p>
                    <p className="clientT">3349 6788</p>

                    <div className="botoesEE">

                        <button className="BTeditar">Editar</button>
                        <button className="BTexcluir">Excluir</button>

                    </div>


                </div>

                <div className="clientes">

                    <p className="clientN">Marcos Lucio</p>
                    <p className="clientE">marcos@email.com</p>
                    <p className="clientT">3349 6788</p>

                    <div className="botoesEE">

                        <button className="BTeditar">Editar</button>
                        <button className="BTexcluir">Excluir</button>

                    </div>

                </div>

                <div className="clientes">

                    <p className="clientN">Laura Port</p>
                    <p className="clientE">laura@email.com</p>
                    <p className="clientT">3349 6788</p>


                    <div className="botoesEE">

                        <button className="BTeditar">Editar</button>
                        <button className="BTexcluir">Excluir</button>

                    </div>

                </div>



            </section>

            <Footer />

        </div>


    );


}