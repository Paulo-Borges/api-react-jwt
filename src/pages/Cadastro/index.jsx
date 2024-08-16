import { useRef } from "react"
import api from "../../services/api"
import { Link } from "react-router-dom"

function Cadastro(){
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()

    async function handleSubmit(event) {
        event.preventDefault()

        try {
            await api.post('/cadastro', {
                name: nameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value
            })
            alert("Usuário Cadastrado com Sucesso!")
        } catch (error) {
            alert("Erro ao cadastrar usuário!")
            
        }
       
    }
    
    return (
        <div className=" justify-center items-center h-screen flex">
            <div className="max-w-lg w-full bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
            <h2 className=" text-2xl font-bold mb-6 text-center text-gray-800">Cadastro</h2>
            <form action="" className=" flex flex-col gap-5" onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" placeholder="Nome" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"/>
                <input ref={emailRef} type="email" placeholder="Email"className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"/>
                <input ref={passwordRef} type="password" placeholder="Senha" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"/>
                <button className="w-full bg-blue-500 text-white py-2px-4 rounded-md hover:bg-blue-800">Cadastrar-se</button>
            </form>
            <Link to="/Login" className="text-blue-700 hover:underline mt-4 block text-center">Já tem uma conta? Faça login</Link>
        </div>
        </div>
        
    )
}

export default Cadastro