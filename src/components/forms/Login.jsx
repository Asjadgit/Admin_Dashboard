import './form.css';
import { MdOutgoingMail } from "react-icons/md";
import { FaUserLock } from "react-icons/fa";
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({onLogin}) => {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        setError('');
    
        try {
            const response = await axios.post('http://127.0.0.1:8001/api/login', {
                email: mail,
                password: password
            });
    
            if (response.data) {
                console.log('Login successful');
                onLogin();
                navigate('/');
                // Handle successful login (e.g., redirect, store token, etc.)
            } else if(!mail && !password){
                setError('Please fill all fields');
                setTimeout(() => {
                    setError('') 
                 }, 3000);
            }else {
                console.error('Login failed');
                setError('Invalid email or password');
                setTimeout(() => {
                   setError('') 
                }, 3000);
            }
        } catch (err) {
            console.error('Login failed:', err);
            setError('An error occurred during login.');
        }
    };
    
    return (
        <>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <h1>Admin Login</h1>

                    {/* show error message */}
                    {error && <p className='error'>{error}</p>}

                    <div className='input-group'>
                        <MdOutgoingMail className='input-icon' />
                        <input type='email' name="email" id="email" placeholder="Enter email" value={mail} onChange={(e) => setMail(e.target.value)} />
                    </div>

                    <div className='input-group'>
                        <FaUserLock className='input-icon' />
                        <input type='password' name="password" id="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <input type='submit' />
                </form>
            </div>
        </>
    )
}

export default Login
