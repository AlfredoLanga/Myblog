import { Link, json, useNavigate } from 'react-router-dom';
import axios from 'axios';
import  './Register.scss'
import { useState } from 'react'

function Register() {
  const navigate = useNavigate()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirm, setPassword_confirm] = useState("");
  const [Erro, setErro] = useState('');
  const handlePassword = (password, password_confirm)=>{
      if(password !==password_confirm){
        return console.log(
         {erro:"Password do not Match"} 
       );
      }
    return console.log( 
      {data:"Passou0"}
     
   );
  }
 const handleSubmit= async(e)=>{
    e.preventDefault()
      
    try{
   if(password!==password_confirm){
     setErro('Password dosent Match')
   }
      
      const response = await axios.post('http://localhost:5001/user/create', JSON.stringify({name,email, password_confirm}),
    {
      headers: { 'Content-Type': 'application/json' }
    })
    console.log(response.data);
    navigate('/login')
  }
    catch(Erro){
      if(!Erro?.response){
        setErro('Erro no Servidor');
      }else if(Erro.response.status===400){
        setErro('Faltou email ou password');
      }
    }
  }
  
  return (
    <div className='register-container'>

        
        <form onSubmit={handleSubmit}>
        <h1>Cadastrar Usuario</h1>
        {Erro && <p style={{color:'red'}}>Password dosent match</p>}
          <div className="form-control">
            <label htmlFor="name">Name:</label>
            <input 
            type="text" 
            name="name" 
            id="name" 
            placeholder='enter your name'
            onChange={((e)=>(
              setName(e.target.value)
            ))}
            />
          </div>

          <div className="form-control">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" placeholder='enter your email'
            
            onChange={((e)=>(
              setEmail(e.target.value)
            ))}
            />
          </div>

          <div className="form-control">
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" placeholder='enter your password'
            onChange={((e)=>(
              setPassword(e.target.value)
            ))}
            />
          </div>

          <div className="form-control">
            <label htmlFor="password-confirm">Password Confirm:</label>
            <input type="password" name="password-confirm" id="password-confirm" placeholder='confirm your Password'
            onChange={((e)=>(
              setPassword_confirm(e.target.value)
            ))}
            />
          </div>
          <button>Cadastrar</button>
          <span>do you already have an acount  <Link to={'/login'}>login here</Link> </span>
         
        </form>
       
    </div>
  )
}

export default Register