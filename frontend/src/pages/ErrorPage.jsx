import React from 'react'
import { Link } from 'react-router-dom'
function ErrorPage() {
  return (
    <div>
      <h1>Está não é a pagina de </h1>
      <Link to="/">Voltar a pagina inicial</Link>
    </div>
  )
}

export default ErrorPage