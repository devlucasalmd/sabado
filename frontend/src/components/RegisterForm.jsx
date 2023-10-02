import React,{useEffect,useState} from 'react'
import "./Form.css"
import "./RegisterForm.css"
import axios from 'axios'

function RegisterForm() {
  const [uso,setUso] =useState(null)
  const [name,setName] =useState("")
  const [idade,setIdade] =useState(0)
  const [email,setEmail] =useState("")
  const [password,setPassword] =useState("")
  const [confirmPassword,setConfirmPassword] =useState("")
  const [image,setImage] =useState(null)

  useEffect(()=>{
    const fileInput = document.getElementById("image");
    const imageLabel = document.getElementById("imageLabel");

    fileInput.addEventListener("change",function(){
      if(fileInput.files.length > 0 && fileInput.files[0].type.startsWith("image/")){
        const reader = new FileReader();
        reader.onload = function(event){
          imageLabel.innerHTML= "";
          imageLabel.style.backgroundImage = `url(${event.target.result})`;
        }
        reader.readAsDataURL(fileInput.files[0])
      }else{
        imageLabel.style.backgroundImage = "";
        imageLabel.innerHTML = "Envie sua imagem"
      }
    })
  },[])

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try{
      const formData = new FormData();
      formData.append('uso', uso)
      formData.append('name', name)
      formData.append('idade', idade)
      formData.append('email', email)
      formData.append('password', password)
      formData.append('confirmPassword', confirmPassword)
      formData.append('image', image)

      const response = await axios.post('localhost:3001/auth/register', formData)
      

      if (response.status === 201){
        alert('Usuario criado com sucesso')
      }
    }
    catch(error) {
      console.error("Erro ao criar o usuario", error)
    }
  }
  return (
      <form className="form" onSubmit={ handleSubmit }>
        <label htmlFor="name">Nome</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          onChange={(e)=>setName(e.target.value)}
          value={name}
        />
        <label htmlFor="email">Email</label>
        <input 
          type="text" 
          id="email" 
          name="email" 
          onChange={(e)=>setEmail(e.target.value)}
          value={email}
        />
        <label htmlFor="idade">Idade</label>
        <input 
          type="number" 
          id="idade" 
          name="idade" 
          onChange={(e)=>setIdade(e.target.value)}
          value={idade}
        />
        <label htmlFor='opcao'>Uso</label>
        <select name="opcao" id="opcao">
          <option setUso={1} >Cliente</option>
          <option setUso= {0} >Vendedor</option>
        </select>
        <label id="imageLabel" htmlFor="image">Envie sua imagem</label>
        <input 
          type="file" 
          id="image" 
          name="image" 
          required
          accept="image/*"
        />
        <label htmlFor="password">Senha</label>
        <input 
          type="text" 
          id="password" 
          name="password" 
          onChange={(e)=>setPassword(e.target.value)}
          value={password}
        />
        <label  htmlFor="confirmPassword">Confirme sua senha</label>
        <input 
          type="text" 
          id="confirmPassword" 
          name="confirmPassword" 
          onChange={(e)=>setConfirmPassword(e.target.value)}
          value={confirmPassword}
        />
        <button type="submit">Criar conta</button>
      </form>
  )
}

export default RegisterForm