import React from "react";
import filmes from "../../Assets/Img/Filmes.png";
import categoria from "../../Assets/Img/Categoria.png";
import Header from "../../Components/header/header";
import '../../Assets/styles/HomeST/style.css';
import Footer from '../../Components/footer/footer';


export const Home = () =>{

    let header1 = {
        descricao: "Conheça nossa Coletânea"
    }


    return(
        
        <div>

            <Header objeto={header1}/>

                <p className="titulo1">Monte sua coletânea de filmes...</p>

                <section className="bloco1">


                    <div className="IT1centro">

                       <p className="titulo">Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor</p>

                        <div>
                    
                            <p className="txterro">Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut eiusmod tempor incididunt ut labore  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit. </p>

                        </div>

                    </div>

                </section>

                <section className="bloco2">

                    <div className="filmes">

                        <img className="img1" src={filmes} alt="" />

                        <div >
                    
                            <p className="titulo">Filmes</p>
                            <br/>
                            <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut eiusmod tempor incididunt ut labore  aliquip ex ea commodo consequat. </p>


                        </div>

                    </div>    

                    <div className="Categorias" >

                        <img src={categoria} alt="" /> 

                        <div >

                            <p className="titulo">Categoria</p>
                            <br/>
                            <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut eiusmod tempor incididunt ut labore  aliquip ex ea commodo consequat.</p>

                        </div>

                    </div>



                </section>


            <Footer/>

        </div>
        
     );
    
}
