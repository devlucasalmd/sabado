import React from 'react'
import styled from "styled-components"

const Modelo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  padding: 32px 0;
`

const Produto = styled.div`
  background: #fff;
  padding: 8px;
  transition: 0.2s;
  &:hover {
    transform: rotateZ(2deg) scale(1:1);
    transition: 0.2s;
  }
`

const ProdutoImage = styled.img`
  height: 220px;
  object-fit: cover;
  width: 220px;
`

const ProdutoDados = styled.div`
  text-align: center;
`

function Home(props) {
  return (
    <Modelo>
      {
        props.produtos.map((produto, indice)=>
          <Produto key={ indice }>
            <a href={"/produto/" + produto.codigo}></a>
            <ProdutoImage
              src={ produto.imagens[indice] }
              alt="Foto do Produto"/>
            <ProdutoDados>
              <div> { produto.modelo } </div>
              <div>R$ { produto.preco } </div>
            </ProdutoDados>
          </Produto>
        )
      }
    </Modelo>
  )
}

export default Home;