import React from "react";

const Buscas = ({buscaNome, onChangeBuscarNome, valorMin, valorMax, onChangeValorMin, onChangeValorMax, onChangeOrdenar}) => {

    
    return (
        <>
            <h1>FILTROS</h1>
            <input
                type="text"
                placeholder="Buscar por nome"
                value={buscaNome}
                onChange={onChangeBuscarNome}/>
            <section>
                <label htmlFor="valorMin">Valor Mínimo:</label><br/>
                <input
                 type="number"
                 id="valorMin"
                 value={valorMin}
                 onChange={onChangeValorMin}
                 /><br/>
                
                <label htmlFor="valorMax">Valor Máximo:</label><br/>
                <input
                 type="number"
                 id="valorMax"
                 value={valorMax}
                 onChange={onChangeValorMax}
                 />  
            </section>
            <label for="ordenar">Ordenar:</label><br/>
            <select id="ordenar" onChange={onChangeOrdenar}>
                <option value="crescente">Crescente</option>
                <option value="decrescente">Decrescente</option>
            </select>
            
        </>
    )
}

export default Buscas;