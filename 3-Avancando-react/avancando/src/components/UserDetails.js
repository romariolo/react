
const UserDetails = ({nome, prof, idade, }) => {
  return (
    <div>
      <h2>Usuários</h2>
      <ul>
        <li>Nome: {nome}</li>
        <li>Profissao: {prof}</li>
        <li>Idade: {idade}</li>
        {idade >= 18 && <p>Pode tirar habilitação</p>}
      </ul>
    </div>
  )
}

export default UserDetails
