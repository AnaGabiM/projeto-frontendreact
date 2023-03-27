import styled from "styled-components";

export const NavBar = styled.nav`
    background-color: black;
    color: darkslateblue;
    text-align: center;
    padding: 20px;
    font-family: Arial;
`
export const ProductContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    row-gap: 30px;
    column-gap: 30px;
    padding: 0 20px;
    width: 1200px;
    justify-content: center;
`
export const Filtro = styled.section`
    width:300px;
    height:450px;
    background-color: white;
    margin-left: 40px;
    opacity: 0.8;
    border-radius: 20px 20px 20px 0px
`
export const Carrinho = styled.section`
    width:300px;
    height:450px;
    background-color: white;
    margin-right: 40px;
    opacity: 0.8;
    border-radius: 20px 20px 0px 20px
`
export const Conteudo = styled.main`
    min-height: 100vh;
    background-image: url(https://img.olhardigital.com.br/wp-content/uploads/2021/04/Galaxia-2048x1497.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    
`
export const Titulo = styled.h2`
    color: white;
    font-family: Arial;
    text-align: center;
    height: 50px;
    display: flex;
    justify-content: center;
    margin-top: 40px;
`

export const Mae1 = styled.section`
   
`
export const Mae2 = styled.section`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
`