import React, { useEffect, useState } from "react";
import filmes from "../../Assets/Img/Filmes.png";
import Header from '../../Components/header/header';
import Footer from '../../Components/footer/footer';
import '../../Assets/styles/FilmeST/index.css';
import { Modal } from "../../Components/Modal";
import { apiAppFilmes } from '../../Services/api';


export const Filmes = () => {

    // heder

    let header3 = {
        descricao: "Cadastre os filmes de sua preferência "
    }

    //listar filmes

    const [generos, setGeneros] = useState([]);
    const [Filmes, setFilmes] = useState([]);

    const listarGeneros = () => {

        apiAppFilmes.get('generos')
            .then(resultado => {
                console.log(resultado);
                setGeneros(resultado.data)
            })

    }

    // assíncrona

    useEffect(() => {
        listarGeneros()
    }, [])

    useEffect(() => {

        let quantidadeElementos = generos.length;

        for (let index = 0; index < quantidadeElementos; index++) {
            apiAppFilmes.get(`generos/${index + 1}/Filmes`)
                .then(resultado => {
                    setFilmes(filmes => filmes.concat(resultado.data))
                })
        }

    }, [generos.length])


    //useState - leitura e escrita

    //Modal

    const [modal, setModal] = useState('hide')

    const AbrirFecharModal = (estadoAtual, idFilme, idGenero,nmFilme) => {

        setIdFilme(idFilme);
        setIdGenero(idGenero);
        setNmFilmes(nmFilme);
        console.log(nmFilme);


        if (estadoAtual === 'hide') {
            setModal('show')
        }
        else {
            setModal('hide')
        }

    }

    //função salvar

    const [idFilme, setIdFilme] = useState('');
    const [idGenero, setIdGenero] = useState('');
    const [tituloFilme, setTituloFilme] = useState('');
    const [nmFilme, setNmFilmes] = useState ('');


    // metodo

    const RealizarAcao = () => {

        apiAppFilmes.post(`generos/${idGenero}/Filmes`, { filme: tituloFilme })

            .then(() => setTituloFilme(''))
            .then(() => {
                window.location.reload()
            })

    }

    // EXCLUIR

    const Excluir = (idGenero, idFilme) => {

        if (window.confirm("Deseja realmente excluir ?")) {

            apiAppFilmes.delete(`generos/${idGenero}/Filmes/${idFilme}`)
                .then(() => {
                    window.location.reload();
                })

        }

    }

    



    return (

        <div>

            <Header objeto={header3} />

            <div className="tituloP2">

                <p >Filmes</p>

                <img className="imgF" src={filmes} alt="" />

            </div>

            <section className="flex">

                <div>

                    <p className="tituloCF">Cadastrar Filmes</p>

                </div>

                <div className="ipscFilme">

                    <input className="IPCfilme" type="text" name="Cadastrar Filmes" id="filmes" placeholder="Título do Filme" value={tituloFilme} onChange={(e) => setTituloFilme(e.target.value)} />

                    <select name="genero" id="genero" className='IPGenero' onChange={(select) => setIdGenero((select.target.value))}>
                        <option value="" hidden selected>Genêros</option>
                        {generos.map((item) => {
                            return (
                                <option value={item.idGenero}>{item.genero}</option>
                            )
                        })}

                    </select>

                    <button className="botaoS" onClick={() => RealizarAcao(idGenero)} type="submit">Salvar</button>

                </div>

            </section>

            <Modal acao="Salvar" mostrar={modal} funcao={AbrirFecharModal} idFilme={idFilme} idGenero={idGenero} nmFilme={nmFilme} />

            <section className="listFilmes" >


                {Filmes.map((item) => {

                    return (

                        <div className="tFilmes">

                            <div className="tFilmes">

                                <p className="filmeN">{item.filme}</p>
                                <p className="filmeG">{item.genero.genero}</p>


                            </div>

                            <div className="botoesEE">

                                <button className="BTeditar" onClick={() => AbrirFecharModal(modal, item.idFilme, item.generoId ,item.filme)}>Editar</button>
                                <button className="BTexcluir" onClick={() => Excluir(item.genero.idGenero, item.idFilme)}>Excluir</button>

                            </div>

                        </div>

                    )

                })}


            </section>

            <Footer />

        </div>

    );


}