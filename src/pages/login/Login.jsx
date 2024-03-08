import { Link } from 'react-router-dom'
import { AuthContext } from "../../context/AuthContext.jsx";
import {useContext , useState} from "react";
import axios from "axios";


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, toggleError] = useState(false);
    const { login } = useContext(AuthContext);

    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);

        try {
            const result = await axios.post('https://api.datavortex.nl/worldwideeofficehours/users/authenticate', {
               username: username,
                password: password,
            });
            // log het resultaat in de console
            console.log(result.data);

            // geef de JWT token aan de login-functie van de context mee
            login(result.data.jwt);

        } catch(e) {
            console.error(e);
            toggleError(true);
        }
    }

    return (
        <section className="container">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Sign in</h1>

                <input className="inp" type="text" required
                       onChange={(e => setUsername(e.target.value))}
                       placeholder="username" name="username" value={username}/>

                <input className="inp" type="password" required minLength={8}
                       onChange={(e => setPassword(e.target.value))}
                       placeholder="Password" name="password" value={password}/>

                {error && <p className="error">Invalid credentials, try again</p>}


                <button className="btn" type="submit">Sign in</button>

                <p>Don't have an account? You can register <Link to='/register'>here</Link>.</p>

            </form>

        </section>
    )
}
export default Login