import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';
import loginFetch from '../../assets/axios/config';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginFailure, loginSuccess, loginPendind } from '../../redux/reducers/UserSlice';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const error= useSelector(state=>state.user.error)
  const pedding = useSelector(state=>state.user.loading)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e)=>{

    e.preventDefault();
    try{
    dispatch(loginPendind())
    const response = await loginFetch.post('/user/login', JSON.stringify({email, password}));
      if(response.data === null){
        dispatch(loginFailure(response.data));
      }
      dispatch(loginSuccess(response.data.user));
      localStorage.setItem("token", response.data.token)
     loginFetch.defaults.headers.Authorization = `Bearer ${response.data.token}`
  navigate('/');
}
  catch(err){
    if(!err?.response){
      dispatch(loginFailure('Erro no Servidor'));
    }else if(err.response.status===400){
      dispatch(loginFailure('Credenciais Invalidas'));
    }
  }
    }

  return (
    <div className='register-container'>
      <form onSubmit={handleLogin}>
        <h1>Login Usuario</h1>

        <div className='form-control'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className='form-control'>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p className='error-message' style={{color:'red'}}>{error}</p>}

        <button className={pedding? 'loading':''} type='submit'>{pedding ? 'Loading...':'Login'}</button>
        <span>
          Dont have an account? <Link to='/Register'>Register here</Link>
        </span>
      </form>
    </div>
  );
}

export default Login;
