import { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { getAllUsers, postUser } from "../../Service";
import "./Registration.css"

const Registration = ({ setUser }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const history = useHistory()
    const validPassword = (password) => password.length >= 8
        && password.split('').some(char => (char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z'))
        && password.split('').some(char => !isNaN(Number(char)))

    return (
        <>
            <div className="registration-form-wrap">
                <div className="left-section-reg"></div>
                <div className="title-reg">
                    <h1>Let's start!</h1>
                    <p>Share some informations with us</p>

                    <div className="reg-form">
                        <form className="" onSubmit={(e) => {
                            e.preventDefault()
                            if (username.length < 5 || !validPassword(password) || email.length < 5) {
                                alert("Username needs at least 5 characters! Password needs at least 8 chararcters (one letter and one number is mandatory minimum)!")
                                return
                            }
                            getAllUsers().then(res => {
                                if (!res.data.some(user => user.username === username || user.email === email)) {
                                    postUser(username, email, password, []).then(res => {
                                        setUser(res.data)
                                        history.push('/')
                                    })
                                }
                            })

                        }}>

                            <input className="text-reg" type="text" placeholder="Username..." onChange={(e) => { setUsername(e.target.value) }} />
                            

                            <input className="text-reg" type="email" placeholder="Email..." onChange={(e) => { setEmail(e.target.value) }} />
                            
                            <input className="pass-reg" type="password" placeholder="Password..." onChange={(e) => { setPassword(e.target.value) }} />
                            

                            
                                <input className="button" type="submit" value="Register" />
                            
                        </form>
                        <div className="back-to-login">
                            <br/>
                            Already a member ? 
                            <br/>
                            <Link to="/login"> login</Link>
                        </div>
                    </div>
                </div>
                <div className="right-section-reg">
                    <div className="welcome-text-reg">
                       
                    </div>
                </div>
            </div>
        </>

    );
}

export default Registration;


