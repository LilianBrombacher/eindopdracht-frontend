import './Home.css'


function Home() {
    return (
    <main className= "page-container">
        {/*<span className="image-wrapper">*/}
        {/*  /!*<header className="title" title= "WorldWide Office Hours"/>*!/*/}
        {/*/!*<h1>WorldWide Office Hours</h1>*!/*/}
        {/*/!*<img src={background} alt="worldmap"/>*!/*/}
        {/*    </span>*/}
        <header>
        <div className="hero-content">
            <h1 className="hero-title">Worldwide Office Hours</h1>
            <p className="hero-subtitle">Is my colleague available right now?</p>
        <form className="hero-form">
            <label>
                <input className="hero-input" type="text" placeholder="Type city"/>
            </label>
            <button type="button" className="hero-btn">Search</button>
        </form>
        </div>
        </header>

    </main>

    )
}

export default Home
