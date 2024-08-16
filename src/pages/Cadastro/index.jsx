import { Link } from "react-router-dom"

function Cadastro(){
    return (
        <div className=" justify-center items-center h-screen flex">
            <div className="max-w-lg w-full bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
            <h2 className=" text-2xl font-bold mb-6 text-center text-gray-800">Cadastro</h2>
            <form action="" className=" flex flex-col gap-5">
                <input type="text" placeholder="Nome" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"/>
                <input type="email" placeholder="Email"className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"/>
                <input type="password" placeholder="Senha" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"/>
                <button className="w-full bg-blue-500 text-white py-2px-4 rounded-md hover:bg-blue-800">Cadastrar-se</button>
            </form>
            <Link to="/Login" className="text-blue-700 hover:underline mt-4 block text-center">Já tem uma conta? Faça login</Link>
        </div>
        </div>
        
    )
}

export default Cadastro