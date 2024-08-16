import { useRef } from "react"
import api from "../../services/api"
import { Link } from "react-router-dom"

function Login(){
    const emailRef = useRef()
    const passwordRef = useRef()

    async function handleSubmit(event) {
        event.preventDefault()

        try {
            const { data:token } = await api.post('/login', {
                email: emailRef.current.value,
                password: passwordRef.current.value
            })

            localStorage.setItem('token', token)
            console.log(token)
            alert("Login OK")
        } catch (error) {
            alert("Senha ou email incorreto!")
            
        }
       
    }
    
    return (
        <div className=" justify-center items-center h-screen flex">
            <div className="max-w-lg w-full bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
            <h2 className=" text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
            <form action="" className=" flex flex-col gap-5" onSubmit={handleSubmit}>
                <input ref={emailRef} type="email" placeholder="Email"className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"/>
                <input ref={passwordRef} type="password" placeholder="Senha" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"/>
                <button className="w-full bg-blue-500 text-white py-2px-4 rounded-md hover:bg-blue-800">Login</button>
            </form>
            <Link to="/" className="text-blue-700 hover:underline mt-4 block text-center">Não tem uma cota? Cadastre-se</Link>
        </div>
        </div>
        
    )
}

export default Login