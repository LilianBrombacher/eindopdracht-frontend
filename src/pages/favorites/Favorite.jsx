import { Link } from 'react-router-dom'
function Favorite() {
    return (
        <section className="container">
                <h2>Your favorite colleagues</h2>
                <h4>
                    Create a list of your favorite colleagues, <Link to='/login'>sign in</Link> or <Link to='/register'>register</Link> now.
                </h4>
        </section>
    )
}
export default Favorite