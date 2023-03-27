import React from "react";
import { Product, ImgProduct, NameProduct, ValueProduct, IdProduct} from "./styled";

const ProductCards = (props) => {
   

    return (
        <Product className="produto">
            <ImgProduct className="produto__img" src={props.produtos.img} alt="produto"/>

            <IdProduct className="produto__id">{props.produtos.id}</IdProduct>
            <NameProduct className="produto__nome">{props.produtos.name}</NameProduct>
            <ValueProduct className="produto__preco">R$ {props.produtos.value}</ValueProduct>    
        </Product>
    )
}

export default ProductCards;