import './Register.css'
import {Link, useNavigate} from 'react-router-dom'
import { useState} from "react";
import axios from 'axios';

function Register() {

    // const [userDetails, setUserDetails] = useState({
    //     name: "",
    //     email: "",
    //     password: "",
    // })
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const navigate = useNavigate();

    // function handleInput(event){
    //
    //     setUserDetails(prevState => {
    //
    //         return {...prevState, [event.target.name]: event.target.value};
    //
    //     })
    //     // console.log(event.target.name)
    //     // console.log(event.target.value)
    // }

    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);
        toggleLoading(true);


        try {
            const response = await axios.post("https://api.datavortex.nl/worldwideeofficehours/users", {
                email: email,
                password: password,
                username: username,
                Headers: {
                    'Content-Type': 'application/json',
                    'X-Api-Key':'worldwideeofficehours:KK6eHe81ZddwgqIr5LaG',
        }
                // info: "testinfo",
                // authorities: [
                //     {
                //         authority: "USER"
                //     }
                // ]
            });
            console.log(response)
            navigate('/login');
        } catch(e) {
            console.error(e);
            toggleError(true);
        }

        toggleLoading(false);
    }

    // function handleSubmit(event){
    //
    //     event.preventDefault();
    //     console.log(userDetails)
    //
    //     fetch("https://api.datavortex.nl/worldwideofficehours", {
    //
    //     })
    //
    // }

    return (
        <section className="container">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Make an account</h1>
                <input className="inp" type="text" required
                       onChange={(e => setUsername(e.target.value))}
                       placeholder="Name" name="username" value={username}/>

                <input className="inp" type="email" required
                       onChange={(e => setEmail(e.target.value))}
                       placeholder="Email address" name="email" value={email}/>

                <input className="inp" type="password" required minLength={8}
                       onChange={(e => setPassword(e.target.value))}
                       placeholder="Password" name="password" value={password}/>
                {error && <p className="error">This account already exists</p>}

                <button className="btn" type="submit" disabled={loading}>
                    Register</button>

                <p>Already have an account? Sign in <Link to='/login'>here</Link>.</p>

            </form>

        </section>
    )
}
export default Register