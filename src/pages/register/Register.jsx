import './Register.css'
import { Link } from 'react-router-dom'
function Register() {
    return (
        <section className="container">
            <form className="form">
                <h1>Make an account</h1>
                <input className="inp" type="text" placeholder="Name" name="name"/>

                <input className="inp" type="email" placeholder="Email address" name="Email"/>

                <input className="inp" type="password" placeholder="Password" name="password"/>

                <button className="btn" type="submit">Register</button>

                <p>Already have an account? Sign in <Link to='/login'>here</Link>.</p>

            </form>

        </section>
    )
}
export default Register