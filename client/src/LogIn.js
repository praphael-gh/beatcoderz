import { useState } from 'react'
import './LogIn.css'

const LogIn = ({onLogin}) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [newUsername, setNewUsername] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState(false)

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        })
        .then((r) => {
            if (r.ok) {
              r.json().then((user) => onLogin(user));
            }
          });
      }

      const handleNewUserSubmit = (event) => {
        // if (passwordConfirm === true) {
            event.preventDefault()
            const formData = {
                username: newUsername,
                password: newPassword
            }
            fetch('/api/users', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formData)
            }).then(resp => resp.json())
            .then((data) => {
                setNewUsername('')
                setNewPassword('')
            })
        // } else {
        //     alert("Password and Password Confirmation must be the same")
        // }
        
    }

    // function confirmation(e) {
    //     e.preventDefault()
    //     console.log(e.target.value)
    //     if (e.target.value === password) {
    //         setPasswordConfirm(true)
    //     } else {
    //         setPasswordConfirm(false)
    //     }
    //     console.log(passwordConfirm)
    // }

    return (
    
        <div className='login_page'>
        <h2>Log In:</h2>
            <div className="login">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <br/>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <br/>
                    <button type="submit">Log In</button>
                </form>
            </div>
            <br/>
        <h2>Create an Account:</h2>
            <div className='create_account'> 
                <form onSubmit={handleNewUserSubmit}>
                    <input type="text" placeholder="New Username" value={newUsername} onChange={(e) => setNewUsername(e.target.value)}/>
                    <br/>
                    <input type="password" placeholder="New Password" id="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required/>
                    <br/>
                    <input type="password" placeholder="Confirm Password" id="confirm_password" required/>
                    <br/>
                    <button type="submit">Create Account</button>
                </form>
            </div>
        </div>
    )
}

export default LogIn;