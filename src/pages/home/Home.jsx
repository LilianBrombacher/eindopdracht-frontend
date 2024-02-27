import './Home.css'


function Home() {
    return (
    <main >
        <header className= "header-container">
        <div className="header-content">
            <h1 className="header-title">Worldwide Office Hours</h1>
            <p className="header-subtitle">Is my colleague available right now?</p>
        <form className="header-form">
            <label>
                <input className="header-input" type="text" placeholder="Type city"/>
            </label>
            <button type="button" className="header-btn">Search</button>
        </form>
        </div>
        </header>
        <div className="home-text">
            {/*<h2>Search for a country</h2>*/}

        </div>

    </main>

    )
}

export default Home
