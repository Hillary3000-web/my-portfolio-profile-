export default function Hero() {
    return (
        <section id="hero">
            <div className="hero-watermark">HCP</div>
            <div className="hero-kicker">
                <div className="hero-kicker-line" />
                <span className="hero-kicker-text">
                    Full Stack Developer — Backend Focused
                </span>
            </div>
            <h1 className="hero-name">
                <span className="glitch" data-text="HILLARY">HILLARY</span>
                <br />
                <span className="amber" data-t="CHUKWUMA">CHUKWUMA</span>
                <br />
                PRINCE
            </h1>
            <div className="hero-bottom">
                <p className="hero-tagline">
                    I architect <em>backends that hold up under pressure</em>
                    <br />
                    and ship frontends clean enough
                    <br />
                    to <em>make designers nod.</em>
                </p>
                <div className="hero-meta">
                    <div className="hero-loc">Port Harcourt, Nigeria</div>
                    <div className="hero-scroll">
                        <div className="sline" />
                        <span>Scroll</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
