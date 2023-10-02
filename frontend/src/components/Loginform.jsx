import React, { useState } from 'react'

function Loginform({changeState}) {
  const [name, setName] = useState("")
  const [senha, setSenha] = useState("")
  return (
    <form className="formLogin">
      <label htmlFor="name">Nome</label>
      <input
        type='text'
        id='name'
        name='name'
        onChange={(e)=>setName(e.target.value)}
        value={name}
      />
      <label htmlFor='senha'>Senha</label>
      <input
        type="text"
        id="senha"
        name='senha'
        onChange={(e)=>setSenha(e.target.value)}
        value={senha}
      />

      <button type='submite'>Entrar</button>
      {/* onClick={} */}
      </form>
  )
}

export default Loginform