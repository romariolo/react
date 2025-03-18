import "./MyForm.css"
import { useState } from "react"
const MyForm = ({user}) => {

 
  const [name,setName] = useState(user ? user.name : '')
  const [email, setEmail] = useState(user ? user.email : '')
  const [bio, setBio] = useState(user ? user.bio : '')
  const [role, setRole] = useState(user.role ? user.role : "")

  const handleName = (e) =>{
    setName(e.target.value)
  }
 

  const handleSubmit =(e) => {
    e.preventDefault();
    console.log("Enviando formulário")
    console.log(name, email, bio, role)
    

    setName("")
    setEmail("")
    setBio("")
  }

 

  return (
    <div>
      {/*Criação de forms*/}
      <form onSubmit={handleSubmit} >
        <div>
            {/*Simplificando en */}
        <label htmlFor="name">Nome</label>
        <input type="text" name="name" 
        placeholder="Digite seu nome" onChange={handleName}
        value={name} />
     
        </div>
        {/*Label envolvendo input */}
        <label>
            <span>E-mail</span>
            <input type="email" name="email" placeholder="Digite seu email" 
            onChange={(e)=> setEmail(e.target.value)} value={email} />
        </label>
        <label >
            <span>Bio</span>
            <textarea name="bio" placeholder="Descrição do usuário" 
            onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
        </label>
        <label>
            <span>Função do Sistema</span>
            <select name="role" onChange={(e) =>setRole(e.target.value)} value={role}>
                <option value="user">Usuário</option>
                <option value="editor">Editor</option>
                <option value="admin">Adminiistrador</option>
            </select>
        </label>
        <input type="submit" value="Enviar"/>
      </form>
    </div>
  )
}

export default MyForm
