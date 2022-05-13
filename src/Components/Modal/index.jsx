import React, { useEffect, useState } from "react";
import '../../Assets/styles/ModalST/index.css'
import { apiAppFilmes } from '../../Services/api';

export const Modal = (props) => {

    const [generos, setGeneros] = useState([]);


    useEffect(() => {

        apiAppFilmes.get('generos')
            .then(resultado => {
                
                setUpdateValor(props.nmFilme);
                setGeneros(resultado.data)
                

            })

    }, [props.nmFilme]) 



    // Alterar

    const [idGenero, setIdGenero] = useState('');

    const [updateValor, setUpdateValor] = useState('');

    const Alterar = () => {

        apiAppFilmes.put('generos/' + props.idGenero + '/Filmes/' + props.idFilme, { filme: updateValor, generoId: idGenero })


            .then(() => {
                window.location.reload();
            })

    }


    return (

        <div className={"modal " + props.mostrar}>

            <div className="itensModal">

                <div className="sairModal">

                    <button className="bt1Modal" onClick={props.funcao}>X</button>

                </div>


                <div className="inputs_modal">

                    <input className="ipModal" type="text" placeholder="Titulo" value={updateValor} onChange={(e) => setUpdateValor(e.target.value)} />

                    <select name="genero" id="genero" className='ipModal' onChange={(select) => setIdGenero((select.target.value))}>
                        <option value="" hidden selected>Genêros</option>
                        {generos.map((item) => {
                            return (
                                <option value={item.idGenero}>{item.genero}</option>
                            )
                        })}

                    </select>

                    <button className="bt2Modal" onClick={() => Alterar()}>{props.acao}</button>
                </div>


            </div>


        </div>
    )
}