import { useState } from "react"

function LoginPage(props) {

    const [login, setLogin] = useState({})
    const [message, setMessage] = useState('')

    const handleLoginChange = (e) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }

    const handleLoginButton = () => {
        fetch('http://localhost:8080/api/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(login)
        }) .then(response => response.json())
        .then(result => {
            if(result.success) {
                props.history.push('/')
            } else {
                setMessage(result.message)
            }
        }) 
    }

    return (
        <div>
            <h1>Login</h1>
            <input type="text" name="username" onChange={handleLoginChange} placeholder="Username" required />
            <input type="password" name="password" onChange={handleLoginChange} placeholder="Password" required />
            {message && <p>{message}</p>}
            <button onClick={handleLoginButton}>Login</button>
        </div>
    )
}

export default LoginPage