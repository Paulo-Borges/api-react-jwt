import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import api from "../../services/api"

function ListarUsuarios(){
const [allusers, setAllUsers] = useState()

    useEffect(() => {
        async function loadUsers(){
            
            const token = localStorage.getItem('token')
            
                const {data: {users},} = await api.get('/listar-usuarios', {
                headers: { Authorization: `Bearer ${token}`}
                // headers.authorization 
            })
           setAllUsers(users)
        }
        loadUsers()
        
    }, [])


    return(
        <div className="max-w-2xl mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-md shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Listar Usuários</h2>
            <ul className="space-y-2">
                {allusers && allusers.length > 0 && allusers.map( (user) => (
                    <li key={user.id} className="bg-gray-100 p-4 rounded-md shadow-lg">
                        <p className="font-semibold">Id: {user.id}</p>
                        <p>Nome: {user.name}</p>
                        <p>Email: {user.email}</p>
                    </li>

                ))}
            </ul>
            <Link to="/"><button className="w-full bg-blue-500 text-white py-2px-4 rounded-md hover:bg-blue-800">Sair</button></Link>

            
        </div>
    )
}

export default ListarUsuarios