import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { getAllUsers } from "../../Service";
import "./Login.css"

const Login = ({ user, setUser }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    return (
        <>
        {user == null ?
            <div>
                <div className="login-form-wrap">
                    <div className="left-section">
                        <div className="title">
                            <h1>Hello!</h1>
                            <p>sign in to your account!</p>
                        </div>
                        <div className="form">
                            <form className="" onSubmit={(e) => {
                                e.preventDefault()
                                getAllUsers().then(res => {
                                    let user = res.data.find(el => (el.username === username || el.email === username) && el.password === password)
                                    if (user) {
                                        setUser(user)
                                        history.push('/')
                                    } else {
                                        alert('Neispravni podaci');
                                    }
                                })

                            }}>
                                <input type="text" placeholder="Username/Email..." onChange={(e) => { setUsername(e.target.value) }} />
                                <input type="password" placeholder="Password..." onChange={(e) => { setPassword(e.target.value) }} />
                                <input type="submit" value="LogIn" />
                            </form>
                            <div className="create-account">
                                Don,t have an Account?
                                <Link to="/registration">Create one</Link>
                            </div>
                        </div>
                    </div>
                    <div className="right-section">
                        <div className="welcome-text">
                            <h1 className="welcome">Welcome Back</h1>
                            <p className="welcome">Please sign in so that you can proceed to your favourite recipes.</p>
                        </div>
                    </div>
                </div>
            </div>
            :
            <p> Vec ste ulogovani</p> }
        </>
    );
}

export default Login;
