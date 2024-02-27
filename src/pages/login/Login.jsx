import { Link } from 'react-router-dom'


function Login() {
    return (
        <section className="container">
            <form className="form">
                <h1>Sign in</h1>

                <input className="inp" type="email" placeholder="Email address" name="Email"/>

                <input className="inp" type="password" placeholder="Password" name="password"/>

                <button className="btn" type="submit">Sign in</button>

                <p>Don't have an account? You can register <Link to='/register'>here</Link>.</p>

            </form>

        </section>
    )
}
export default Login