import React from "react";
import ProductCards from "../Cards/Cards";
import { NavBar, ProductContainer, Conteudo, Titulo, Filtro, Carrinho, Mae1 , Mae2 } from "./styled";
import produtos from "./produtos.json"
import Buscas from "../Filtro/Filtro";
import { useState } from "react";


const Home = () => {
    let produto = []
    for (let i=0; i<produtos.length; i++){
        produto.push(<ProductCards produtos={produtos[i]} />);
    }

    const [buscaNome, setBuscarNome] = useState('')
    const [ordenar, setOrdenar] = useState('')
    const [valorMin, setValorMin] = useState('')
    const [valorMax, setValorMax] = useState('')
    const [buscaId, setId] = useState('')

    const onChangeBuscarNome = (event) => {
        setBuscarNome(event.target.value)
    }
    const onChangeOrdenar = (event) => {
        setOrdenar(event.target.value)
    }
    const onChangeValorMin = (event) => {
        setValorMin(event.target.value)
    }
    const onChangeValorMax = (event) => {
        setValorMax(event.target.value)
    }
    const onChangeId = (event) => {
        setId(event.target.value)
    }


    const produtoFiltrado = produtos.filter((produto) => {
        return (
            buscaId ? produto.id===buscaId : produto
        )
    })
    

    return (
        <div>
            <NavBar className="cabeçalho">
                <h1 className="Titulo">Astrodev</h1>
            </NavBar>
            <Conteudo className="conteudo">
                <Mae1>
                    <Titulo>Produtos</Titulo>
                </Mae1>
                <Mae2>
                    <Filtro>
                        <Buscas
                        produtos={produtos}
                        buscaNome={buscaNome}
                        ordenar={ordenar}
                        valorMin={valorMin}
                        valorMax={valorMax}
                        onChangeBuscarNome={onChangeBuscarNome}
                        onChangeOrdenar={onChangeOrdenar}
                        onChangeValorMin={onChangeValorMin}
                        onChangeValorMax={onChangeValorMax}
                        />   
                    </Filtro>
                    <ProductContainer className="produto_conteiner">
                        {produto}
                    </ProductContainer>
                    <Carrinho/>
                </Mae2>
            </Conteudo>
        </div>
        
        
    )
};

export default Home;