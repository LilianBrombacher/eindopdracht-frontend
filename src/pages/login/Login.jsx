import { Link } from 'react-router-dom'

function Login() {
    return (
        <section className="container">
            <form className="form">
                <h1>Inloggen</h1>

                <input className="inp" type="email" placeholder="Emailadres" name="Email"/>

                <input className="inp" type="password" placeholder="Wachtwoord" name="password"/>

                <button className="btn" type="submit">Log in</button>

                <p>Heb je nog geen account? Dan kun je je <Link to='/register'>hier</Link> registreren</p>

            </form>

        </section>
    )
}
export default Login