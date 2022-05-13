import React, { useEffect, useState } from "react";
import categoria from "../../Assets/Img/Categoria.png";
import Header from '../../Components/header/header';
import Footer from '../../Components/footer/footer';
import '../../Assets/styles/GeneroST/index.css';
import { apiAppFilmes } from "../../Services/api";


export const Generos = () => {

    let header4 = {
        descricao: "Cadastre os gêneros dos filmes "
    }

    //listar Generos

    const [generos, setgeneros] = useState([]);

    const Listargenero = () => {

        apiAppFilmes.get('generos')
            .then(resultado => {
                console.log(resultado);
                setgeneros(resultado.data)
            })

    }

    //ciclo de vida - useEffect

    useEffect(() => {

        Listargenero()

    }, [])

    //useState - leitura e escrita

    const [modal, setModal] = useState('hide')

    const AbrirFecharModal = (estadoAtual, genero, idGenero) => {

        setupdateID(idGenero);
        setupdateGenero(genero);
        setUpdateValor(genero);

        if (estadoAtual === 'hide') {
            setModal('show')
        }
        else {
            setModal('hide')
        }

    }

    //alterar genero

    const [updateValor, setUpdateValor] = useState('');

    const [ setupdateGenero] = useState('');

    // updateGenero

    const [updateID, setupdateID] = useState('');

    const Alterar = () => {

        apiAppFilmes.put(`generos/${updateID}`, { genero: updateValor })
            .then(() => {
                AbrirFecharModal('show');
                window.location.reload();
            })

    }



    //função salvar

    const [valorInput, setValorInput] = useState('');

    const RealizarAcao = () => {

        apiAppFilmes.post('generos', { genero: valorInput })
            .then((res) => {
                window.location.reload()
            })

    }



    //função excluir


    const Excluir = (idGenero) => {

        if (window.confirm("Deseja realmente excluir ?")) {

            apiAppFilmes.delete(`generos/${idGenero}`)
                .then(() => {
                    window.location.reload();
                })

        }

    }

    return (

        <div>

            <Header objeto={header4} />

            <div className="tituloP2" >

                <p >Categoria</p>

                <img className="imgG2" src={categoria} alt="" />

            </div>

            <section className="inputsG">

                <div>

                    <p className="genero-N" >Cadastrar Gênero</p>

                </div>

                <div className="generoIB">

                    <input className="input-g" type="text" id="filmes" placeholder="Gênero" value={valorInput} onChange={(e) => setValorInput(e.target.value)} />

                    <button className="botaoS" onClick={() => RealizarAcao()} type="submit">Salvar</button>

                </div>


            </section>

            {/* modal */}


            <div className={"update" + modal}>

                <input type="text" className="updateInput" value={updateValor} onChange={(e) => setUpdateValor(e.target.value)} />
                <button className="BTeditar" onClick={() => Alterar()}>Salvar</button>

            </div>


            <section className="listGenero">

                {generos.map((item) => {

                    return (

                        <div className="tFilmes">


                            <p className="generosN">{item.genero}</p>

                            <div className="botoesEE">

                                <button className="BTeditar" onClick={() => AbrirFecharModal(modal, item.genero, item.idGenero)}>Editar</button>
                                <button className="BTexcluir"onClick={() => Excluir(item.idGenero)}>Excluir</button>

                            </div>



                        </div>



                    )

                })}



            </section>






            <Footer />


        </div>
    );

}