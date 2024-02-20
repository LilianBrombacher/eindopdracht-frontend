import './Register.css'
import { Link } from 'react-router-dom'
function Register() {
    return (
        <section className="form-parent">
            <form className="form">
                <h1>Maak een account aan</h1>
                <input className="inp" type="text" placeholder="Naam" name="name"/>

                <input className="inp" type="email" placeholder="Emailadres" name="Email"/>

                <input className="inp" type="password" placeholder="Wachtwoord" name="password"/>

                <button className="btn" type="submit">Aanmelden</button>

                <p>Heb je al een account? Dan kun je <Link to='/login'>hier</Link> inloggen</p>

            </form>

        </section>
    )
}
export default Register