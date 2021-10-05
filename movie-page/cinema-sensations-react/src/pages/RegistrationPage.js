import { useState } from "react"

function RegistrationPage(props) {

    const [user, setUser] = useState({})

    const handleRegisterChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleRegisterButton = () => {
        fetch('http://localhost:8080/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }) .then(response => response.json())
        .then(result => {
            if(result.success) {
                props.history.push('/login')
            } 
        })
        
    }

    return(
        <div>
            <h1>Register</h1>
            <input type="text" name="username" onChange={handleRegisterChange} placeholder="Username" required/>
            <input type="password" name="password" onChange={handleRegisterChange} placeholder="Password" required/>
            <input type="text" name="firstName" onChange={handleRegisterChange} placeholder="First Name" />
            <input type="text" name="lastName" onChange={handleRegisterChange} placeholder="Last Name"  />
            <button onClick={handleRegisterButton}>Register</button>
        </div>
    )

}

export default RegistrationPage