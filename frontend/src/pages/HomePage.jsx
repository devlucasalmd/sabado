import ProdutosExemplos from "../data/ProdutosExemplos"
import Home from "../components/Home"


export function HomePage(){
  return(
    <>
      <Home produtos= {ProdutosExemplos} />
    </>
  )
}