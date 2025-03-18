import {useState} from 'react'

const ListRender = () => {

    const [list] =useState(["Romário", "Otávio", "Eridan", "Odeni"])
    const [user, setUsers] =useState([{
        id: 1, name: "João", age: 45},
        {id: 2, name: "Mauro", age: 90},
        {id:3, name: "Luan", age: 2
    }])

    const deleteRandom = () =>{
        const randomNumber = Math.floor(Math.random() * 4);
        
        setUsers((prevUser) =>{

            return prevUser.filter((user => randomNumber !== user.id));

        }); 
    }

  return (
    
    <div>
     <ul>
        {list.map((nome, i) => (
            <li>{nome}</li>
        ))}
     </ul>
     <div>
        <ul>
            {user.map((user) =>(
                <li key={user.id}>
                    {user.name} - {user.age}
                </li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Delete random</button>
     </div>
    </div>
  )
}

export default ListRender
